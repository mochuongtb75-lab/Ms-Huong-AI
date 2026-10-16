import { Lead } from '../types';

const LEADS_STORAGE_KEY = 'mshuong_ai_leads_v1';

export interface SubmitLeadPayload {
  fullName: string;
  phone: string;
  email: string;
  occupation: string;
  source?: string;
  note?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  lead?: Lead;
  error?: string;
}

/**
 * Lead Service Architecture
 * Designed for easy extension to Google Sheets Webhook, Firebase Firestore, or REST API.
 */
export const leadService = {
  /**
   * Submit lead information
   */
  async submitLead(payload: SubmitLeadPayload): Promise<LeadSubmissionResult> {
    try {
      // 1. Basic validation
      if (!payload.fullName.trim()) {
        return { success: false, message: 'Vui lòng nhập họ và tên của bạn.' };
      }
      if (!payload.phone.trim()) {
        return { success: false, message: 'Vui lòng nhập số điện thoại hoặc Zalo.' };
      }
      if (!payload.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
        return { success: false, message: 'Vui lòng nhập email hợp lệ để nhận tài liệu.' };
      }
      if (!payload.occupation) {
        return { success: false, message: 'Vui lòng chọn nghề nghiệp / đơn vị công tác.' };
      }

      // 2. Build full Lead model
      const newLead: Lead = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        fullName: payload.fullName.trim(),
        phone: payload.phone.trim(),
        email: payload.email.trim().toLowerCase(),
        occupation: payload.occupation,
        createdAt: new Date().toISOString(),
        source: payload.source || 'Landing Page Hero Form',
        note: payload.note || ''
      };

      // 3. Persist locally to browser storage for safety
      try {
        const existingLeads: Lead[] = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
        existingLeads.unshift(newLead);
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('Could not save lead to localStorage', err);
      }

      // =========================================================================
      // [INTEGRATION EXTENSION POINT]
      // To connect to Google Sheets, Firebase Firestore, or a custom REST API:
      //
      // Option A: Google Sheets Web App (Apps Script):
      // await fetch("YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL", {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(newLead)
      // });
      //
      // Option B: Firebase Firestore:
      // import { db } from "../firebase";
      // await addDoc(collection(db, "leads"), newLead);
      //
      // Option C: REST API endpoint:
      // await fetch("/api/leads", { method: "POST", body: JSON.stringify(newLead) });
      // =========================================================================

      // Simulate network response latency
      await new Promise((resolve) => setTimeout(resolve, 650));

      return {
        success: true,
        message: 'Cảm ơn bạn đã đăng ký! MS HƯƠNG AI sẽ gửi tài liệu và thông tin tới bạn.',
        lead: newLead
      };
    } catch (error) {
      console.error('Error submitting lead:', error);
      return {
        success: false,
        message: 'Có lỗi xảy ra khi gửi thông tin. Vui lòng liên hệ trực tiếp hotline hoặc Zalo 0979.289.198.',
        error: String(error)
      };
    }
  },

  /**
   * Retrieve all saved leads (useful for admin review in browser)
   */
  getStoredLeads(): Lead[] {
    try {
      return JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  },

  /**
   * Export leads as CSV
   */
  exportLeadsToCSV(): string {
    const leads = this.getStoredLeads();
    if (!leads.length) return '';
    const headers = ['ID', 'Họ tên', 'Số điện thoại', 'Email', 'Nghề nghiệp', 'Ngày tạo', 'Nguồn'];
    const rows = leads.map(l => [
      l.id,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.occupation}"`,
      `"${l.createdAt}"`,
      `"${l.source}"`
    ]);
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }
};
