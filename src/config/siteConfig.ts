import { Course, AIAssistant, TrainingStep, NavigationItem } from '../types';

export const CONFIG_CONTACT_EMAIL = 'mochuongtb75@gmail.com';

export const siteConfig = {
  brandName: 'MS HƯƠNG AI',
  brandSubtitle: 'ỨNG DỤNG AI & CÔNG NGHỆ THỰC CHIẾN',
  personName: 'MỘC HƯƠNG',
  roleTitle: 'GIẢNG VIÊN & CHUYÊN GIA ĐÀO TẠO AI',
  tagline: 'Biến AI thành trợ lý – Biến ý tưởng thành sản phẩm',
  missionStatement: 'Ứng dụng AI & công nghệ thực chiến cho giáo dục, hành chính và công việc hằng ngày.',
  philosophy: 'AI không thay thế người giáo viên. AI giúp người giáo viên có thêm thời gian để tập trung vào điều quan trọng nhất – người học.',
  
  phone: '0979.289.198',
  phoneDisplay: '0979.289.198',
  zalo: '0979.289.198',
  zaloUrl: 'https://zalo.me/0979289198',
  email: CONFIG_CONTACT_EMAIL,
  address: 'Lai Châu',
  
  facebookUrl: 'https://facebook.com',
  fanpageUrl: 'https://facebook.com/mshuongai',
  
  // Images (can be swapped in /public/images/)
  portraitImage: '/images/portrait.svg',
  portraitFallback: '/images/portrait.svg',
  userUploadPath: '/images/anh-huong.jpeg',
  logoImage: '/images/logo.png',
  heroImage: '/images/hero.jpg',

  navigation: [
    { name: 'Về Ms Hương', href: '#about' },
    { name: 'Chương Trình Đào Tạo', href: '#programs' },
    { name: 'Phương Pháp', href: '#method' },
    { name: 'Bạn Sẽ Làm Được Gì?', href: '#outcomes' },
    { name: 'Triết Lý', href: '#philosophy' },
    { name: 'Liên Hệ', href: '#contact' },
  ] as NavigationItem[],

  occupations: [
    'Giáo viên',
    'Giảng viên',
    'Cán bộ quản lý',
    'Nhân viên hành chính',
    'Nhân viên văn phòng',
    'Sinh viên',
    'Freelancer',
    'Khác'
  ],

  stats: [
    {
      value: '60–80%',
      number: 80,
      prefix: '60–',
      suffix: '%',
      label: 'Tiết kiệm thời gian',
      sublabel: 'Giảm tải khối lượng công việc sự vụ'
    },
    {
      value: '100%',
      number: 100,
      suffix: '%',
      label: 'Thực hành thực tế',
      sublabel: 'Cầm tay chỉ việc tạo ra sản phẩm'
    },
    {
      value: '0 CẦN',
      number: 0,
      prefix: '0 ',
      label: 'Biết lập trình',
      sublabel: 'Ai cũng có thể học và làm chủ dễ dàng'
    }
  ],

  courses: [
    {
      id: 'course-01',
      number: 'COURSE 01',
      title: 'AI CHO GIÁO VIÊN',
      description: 'Ứng dụng AI vào giảng dạy, lập kế hoạch bài giảng, xây dựng hoạt động học tập và hỗ trợ công việc chuyên môn.',
      iconName: 'GraduationCap',
      tag: 'Phổ biến nhất',
      highlights: ['Soạn giáo án siêu tốc', 'Hoạt động tương tác', 'Đánh giá học sinh']
    },
    {
      id: 'course-02',
      number: 'COURSE 02',
      title: 'PROMPT ENGINEERING',
      description: 'Hướng dẫn cách viết câu lệnh từ cơ bản đến nâng cao để giao tiếp với AI chính xác và hiệu quả hơn.',
      iconName: 'Terminal',
      tag: 'Cốt lõi',
      highlights: ['Công thức viết Prompt chuẩn', 'Context & Constraints', 'Role Prompting']
    },
    {
      id: 'course-03',
      number: 'COURSE 03',
      title: 'CHATGPT & GEMINI',
      description: 'Ứng dụng AI để viết, nghiên cứu, phân tích tài liệu, xây dựng ý tưởng, tạo nội dung và giải quyết công việc.',
      iconName: 'Sparkles',
      tag: 'Đa nhiệm',
      highlights: ['Xử lý văn bản lớn', 'Tổng hợp số liệu', 'Trợ lý tư duy phản biện']
    },
    {
      id: 'course-04',
      number: 'COURSE 04',
      title: 'TẠO APP BẰNG AI',
      description: 'Từng bước biến ý tưởng thành các ứng dụng phục vụ giáo dục và công việc mà không cần chuyên sâu về lập trình.',
      iconName: 'AppWindow',
      tag: 'Thực chiến cao',
      highlights: ['Ứng dụng không cần code', 'Triển khai Web App', 'Tự động hóa tác vụ']
    },
    {
      id: 'course-05',
      number: 'COURSE 05',
      title: 'GOOGLE AI STUDIO',
      description: 'Thực hành xây dựng ứng dụng, trợ lý AI và các công cụ thông minh phục vụ công việc.',
      iconName: 'Layers',
      tag: 'Công nghệ Google',
      highlights: ['Gemini 2.5/Flash', 'System Instructions', 'Tùy biến tham số AI']
    },
    {
      id: 'course-06',
      number: 'COURSE 06',
      title: 'THIẾT KẾ HỌC LIỆU SỐ',
      description: 'Sử dụng AI để tạo bài tập, trò chơi, infographic, slide, hình ảnh, video và tài nguyên học tập.',
      iconName: 'FileSpreadsheet',
      tag: 'Trực quan sinh động',
      highlights: ['Tạo Slide bài giảng', 'Infographic trực quan', 'Video AI minh họa']
    },
    {
      id: 'course-07',
      number: 'COURSE 07',
      title: 'XÂY DỰNG TRỢ LÝ AI',
      description: 'Thiết kế trợ lý AI theo từng nhu cầu: soạn giảng, nghiên cứu, sáng tạo nội dung, quản lý công việc và hỗ trợ học tập.',
      iconName: 'Bot',
      tag: 'Cá nhân hóa',
      highlights: ['Trợ lý chuyên môn hóa', 'Kiến thức theo ngành', 'Tự động trả lời']
    },
    {
      id: 'course-08',
      number: 'COURSE 08',
      title: 'AI CHO NGHIÊN CỨU & CÔNG VIỆC',
      description: 'Khai thác AI để tìm ý tưởng, xử lý thông tin, phân tích dữ liệu, xây dựng báo cáo và nâng cao năng suất.',
      iconName: 'SearchCode',
      tag: 'Học thuật & Quản trị',
      highlights: ['Tìm tài liệu khoa học', 'Trích xuất điểm cốt lõi', 'Soạn thảo báo cáo']
    },
    {
      id: 'course-09',
      number: 'COURSE 09',
      title: 'TRÒ CHƠI HỌC TẬP',
      description: 'Ứng dụng AI sáng tạo trò chơi học tập tương tác, game giáo dục, câu đố và hoạt động trải nghiệm kích thích hứng thú học tập.',
      iconName: 'Gamepad2',
      tag: 'Tương tác hứng khởi',
      highlights: ['Gamification', 'Quiz câu hỏi trắc nghiệm', 'Thử thách trải nghiệm']
    }
  ] as Course[],

  assistants: [
    {
      id: 'asst-1',
      title: 'Trợ lý giảng dạy',
      description: 'Gợi ý phương pháp sư phạm, cấu trúc bài dạy và câu hỏi thảo luận sáng tạo.',
      iconName: 'BookOpen'
    },
    {
      id: 'asst-2',
      title: 'Trợ lý nghiên cứu',
      description: 'Tra cứu tổng quan tài liệu, lược dịch bài báo học thuật và định dạng trích dẫn.',
      iconName: 'BookMarked'
    },
    {
      id: 'asst-3',
      title: 'Trợ lý viết nội dung',
      description: 'Soạn thảo thông báo, bài viết truyền thông, bài chia sẻ bổ ích chuẩn văn phong.',
      iconName: 'PenTool'
    },
    {
      id: 'asst-4',
      title: 'Trợ lý thiết kế',
      description: 'Lên ý tưởng hình ảnh, bố cục slide và các ấn phẩm số bắt mắt, chỉn chu.',
      iconName: 'Palette'
    },
    {
      id: 'asst-5',
      title: 'Trợ lý tạo học liệu',
      description: 'Xây dựng ngân hàng đề thi, bài tập phân hóa theo năng lực người học.',
      iconName: 'FileCheck'
    },
    {
      id: 'asst-6',
      title: 'Trợ lý lập kế hoạch',
      description: 'Lên thời khóa biểu, kế hoạch tuần/tháng và nhắc nhở công việc quan trọng.',
      iconName: 'CalendarDays'
    },
    {
      id: 'asst-7',
      title: 'Trợ lý sáng tạo',
      description: 'Brainstorming ý tưởng mới lạ cho sự kiện, dự án học tập và ngoại khóa.',
      iconName: 'Lightbulb'
    },
    {
      id: 'asst-8',
      title: 'Trợ lý công việc',
      description: 'Xử lý email, lập biên bản cuộc họp và tự động hóa quy trình văn phòng.',
      iconName: 'Briefcase'
    }
  ] as AIAssistant[],

  methodSteps: [
    {
      step: '01',
      title: 'HIỂU',
      description: 'Nắm vững bản chất nguyên lý hoạt động của AI và cách tư duy logic khi giao tiếp với mô hình ngôn ngữ lớn.',
      isGold: false
    },
    {
      step: '02',
      title: 'THỰC HÀNH',
      description: 'Cầm tay chỉ việc từng cú click, viết câu lệnh theo công thức chuẩn hóa, không mơ hồ hay lý thuyết suông.',
      isGold: false
    },
    {
      step: '03',
      title: 'TẠO SẢN PHẨM',
      description: 'Tạo ra sản phẩm thực thụ ngay trong buổi học: giáo án, bộ slide, ứng dụng thông minh hoặc video giảng dạy.',
      isGold: true
    },
    {
      step: '04',
      title: 'ỨNG DỤNG',
      description: 'Đưa vào quy trình công việc hằng ngày, giải phóng thời gian lặp lại và nâng cao năng suất tối đa.',
      isGold: true
    }
  ] as TrainingStep[],

  outcomes: [
    'Viết Prompt chuyên nghiệp',
    'Xây dựng bộ Prompt cá nhân',
    'Tạo kế hoạch bài giảng bằng AI',
    'Tạo bài tập và đề kiểm tra',
    'Thiết kế trò chơi học tập',
    'Tạo infographic và slide',
    'Tạo hình ảnh và video AI',
    'Xây dựng trợ lý AI cá nhân',
    'Tạo ứng dụng bằng AI',
    'Hỗ trợ nghiên cứu khoa học',
    'Viết nội dung truyền thông',
    'Tự động hóa một phần công việc'
  ]
};
