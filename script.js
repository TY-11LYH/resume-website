// 简历数据 - 静态版本，无需服务器
const resumeData = {
  "personalInfo": {
    "name": "童瑶",
    "email": "1716880166@qq.com",
    "phone": "+86 182 6791 9140",
    "location": "浙江",
    "age": "24周岁",
    "avatar": "https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/03b2223f-54d1-4abf-8e88-3f94c77e0f52/42317cc0e4054b9b3bb421a83cbae0ca.jpg?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1780035114&Signature=P6+OynPQHsSBC4WHJ5nCMxBAL/0="
  },
  "education": [
    {
      "id": 1,
      "school": "浙江师范大学",
      "major": "教育学",
      "degree": "硕士",
      "period": "2024.09-2027.06",
      "description": "主修课程：国际教育评价、教育学原理、社会科学研究方法等。"
    },
    {
      "id": 2,
      "school": "浙江师范大学",
      "major": "小学数学教育",
      "degree": "本科",
      "period": "2020.10-2024.06",
      "description": "主修课程：概率论、微积分、摄影课、剪辑课、新媒体教学课、量化研究方法��教育心理学等。"
    }
  ],
  "campusExperience": [
    {
      "id": 1,
      "title": "学院24级学生班长",
      "role": "学生干部",
      "period": "2024.10-至今",
      "description": "负责研究生班级日常管理，组织班级学术交流活动和团队建设，收集同学需求并反馈给学院，搭建师生沟通桥梁，协助学院完成各项学生工作，班级凝聚力和满意度持续提升。"
    },
    {
      "id": 2,
      "title": "校23幢公寓楼楼长",
      "role": "学生干部",
      "period": "2024.10-至今",
      "description": "负责公寓楼日常管理和服务工作，策划和组织公寓文化活动，协调解决宿舍问题和设施维护，管理楼栋安全和卫生，建立良好的住宿环境，为同学们提供优质的宿舍服务体验。"
    },
    {
      "id": 3,
      "title": "获奖情况",
      "role": "荣誉奖励",
      "period": "2020-2026",
      "description": "研究生校级奖学金，院级优秀学生干部；本科校优秀心理委员、优秀毕业生等"
    }
  ],
  "internship": [
    {
      "id": 1,
      "company": "喜马拉雅平台",
      "position": "有声内容运营实习",
      "period": "2025.03-2025.06",
      "description": [
        "AI效率优化：针对重复性工作痛点，自主开发三个AI工具实现流程智能化改造。构建批量数据转换工具（腾讯在线文档→LMS自动转换，处理时间3小时→10分钟，效率提升95%）；采用LPT贪心算法构建智能任务分配系统（周处理时间3小时→30分钟，效率提升83%）；开发AI话术生成器（确认时间5分钟→10秒，效率提升96%）。相关工具代码已开源至GitHub：https://github.com/TY-11LYH/my-tools",
        "数据分析管理：负责有声书招募全流程数据分析管理，发布招募任务800多条，统计试音6000多条，跟踪中音350+条，为项目预估收益26万+。搭建6张Excel在线数据报表+问卷星数据追踪体系，实现数据可视化和决策支持。",
        "用户运营沟通：处理企微会话1万多次，协调甲方需求对接和跨部门沟通。妥善处理客诉问题20+起，同时完成会议室预定、宣传喜报制作、小说内容审核等日常运营工作。"
      ]
    },
    {
      "id": 2,
      "company": "浙江银泰百货有限公司",
      "position": "市场部运营实习",
      "period": "2025.10-2026.01",
      "description": [
        "全量运营增长：独立负责抖音、小红书、公众号矩阵的日常运营。通过数据分析倾斜平台视频资源，单周视频产量提升200%。实习期内累计主导产出图文内容130+篇、短视频60+条，为线上渠道累计导入曝光超400万次，实现粉丝净增长约1500人。",
        "整合渠道协同：参与大型营销活动的线上推广，通过内容预热、门店宣传核查及线下互动装置（扭蛋机、电子屏）运营，形成线上线下引流闭环，助力商场新媒体周均曝光量较初期提升约150%。"
      ]
    },
    {
      "id": 3,
      "company": "金华东苑小学和金华乾西乡中心小学",
      "position": "数学实习教师",
      "period": "2023.03-2023.11",
      "description": [
        "教学创新：针对"认识时间""小数除法应用"等难点，主导开发教学案例获"具有显著实践推广价值"评价。",
        "成果提升：通过课堂监测和分层教学，使课堂互动率提升30%，知识点正确率从68%提升至85%。"
      ]
    },
    {
      "id": 4,
      "company": "金华家教平台",
      "position": "社群运营",
      "period": "2021.06-2023.06",
      "description": [
        "用户需求对接：作为核心节点对接教师与家长双边需求，深入挖掘用户痛点，用户满意度超90%。",
        "商业价值转化：通过社群运营与活动落地，每月为平台创造稳定信息费收入2000+。"
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "部级课题《中国与南非教育合作研究》",
      "period": "2025.10-2025.12",
      "description": "课题组成员。独立撰写"中非职业教育合作"章节，具备国际视野和系统性分析能力。",
      "technologies": ["教育研究", "国际合作", "案例分析", "报告撰写"],
      "achievements": "独立完成课题研究章节撰写",
      "image": ""
    },
    {
      "id": 2,
      "title": "部级课题《中国对非洲青年国际传播的战略环境与策略路径研究》",
      "period": "2025.10-2026.05",
      "description": "课题组成员。独立完成非洲金砖国家青年发展2万字研究报告，具备深度研究和报告撰写能力。",
      "technologies": ["国际传播", "战略研究", "青年发展", "报告撰写"],
      "achievements": "独立完成2万字研究报告",
      "image": ""
    }
  ],
  "skills": [
    {
      "category": "专业技能",
      "items": [
        {"name": "新媒体运营", "level": 90},
        {"name": "内容策划与生产", "level": 85},
        {"name": "社群运营", "level": 90},
        {"name": "教学设计", "level": 85}
      ]
    },
    {
      "category": "技术技能",
      "items": [
        {"name": "摄影剪辑", "level": 80},
        {"name": "数据分析", "level": 85},
        {"name": "Office办公软件", "level": 90}
      ]
    },
    {
      "category": "语言能力",
      "items": [
        {"name": "英语CET-6", "level": 85},
        {"name": "普通话二甲", "level": 90}
      ]
    },
    {
      "category": "证书资格",
      "items": [
        {"name": "教师资格证", "level": 100},
        {"name": "计算机MS二级证书", "level": 100},
        {"name": "C2驾驶证", "level": 100},
        {"name": "奥赛教练员证", "level": 99}
      ]
    }
  ],
  "contact": {
    "email": "1716880166@qq.com",
    "phone": "+86 182 6791 9140",
    "wechat": "",
    "linkedin": "",
    "github": "https://github.com/TY-11LYH/my-tools"
  }
};

// 加载简历数据到页面
function loadResumeData() {
  loadHeroSection();
  loadEducation();
  loadInternship();
  loadProjects();
  loadCampusExperience();
  loadSkills();
  loadContact();
}

// 加载Hero区域
function loadHeroSection() {
  const nameElement = document.getElementById('name');
  const avatarElement = document.getElementById('avatar');

  if (nameElement && resumeData.personalInfo) {
    nameElement.textContent = resumeData.personalInfo.name;
  }

  if (avatarElement && resumeData.personalInfo.avatar) {
    avatarElement.src = resumeData.personalInfo.avatar;
    avatarElement.style.display = 'block';
  }
}

// 加载教育背景
function loadEducation() {
  const container = document.getElementById('education-timeline');
  if (!container || !resumeData.education) return;

  container.innerHTML = resumeData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-period">${edu.period}</div>
        <h3 class="timeline-title">${edu.school}</h3>
        <p class="timeline-role">${edu.major} | ${edu.degree}</p>
        <p class="timeline-description">${edu.description}</p>
      </div>
    </div>
  `).join('');
}

// 加载实习经历
function loadInternship() {
  const container = document.getElementById('internship-timeline');
  if (!container || !resumeData.internship) return;

  container.innerHTML = resumeData.internship.map(intern => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-period">${intern.period}</div>
        <h3 class="timeline-title">${intern.company}</h3>
        <p class="timeline-role">${intern.position}</p>
        <ul class="timeline-description">
          ${intern.description.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// 加载项目经历
function loadProjects() {
  const container = document.getElementById('projects-grid');
  if (!container || !resumeData.projects) return;

  container.innerHTML = resumeData.projects.map(project => `
    <div class="project-card">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <div class="project-period">${project.period}</div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-achievements">${project.achievements}</div>
      </div>
    </div>
  `).join('');
}

// 加载校园经历
function loadCampusExperience() {
  const container = document.getElementById('campus-timeline');
  if (!container || !resumeData.campusExperience) return;

  container.innerHTML = resumeData.campusExperience.map(campus => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-period">${campus.period}</div>
        <h3 class="timeline-title">${campus.title}</h3>
        <p class="timeline-role">${campus.role}</p>
        <p class="timeline-description">${campus.description}</p>
      </div>
    </div>
  `).join('');
}

// 加载技能证书
function loadSkills() {
  const container = document.getElementById('skills-container');
  if (!container || !resumeData.skills) return;

  container.innerHTML = resumeData.skills.map(skillCategory => `
    <div class="skill-category">
      <h3 class="skill-category-title">${skillCategory.category}</h3>
      <div class="skills-grid">
        ${skillCategory.items.map(skill => `
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// 加载联系方式
function loadContact() {
  const container = document.getElementById('contact-grid');
  if (!container || !resumeData.contact) return;

  const contact = resumeData.contact;
  let contactHTML = '';

  if (contact.email) {
    contactHTML += `
      <div class="contact-card">
        <div class="contact-icon">📧</div>
        <a href="mailto:${contact.email}" class="contact-value">${contact.email}</a>
        <div class="contact-label">邮箱</div>
      </div>
    `;
  }

  if (contact.phone) {
    contactHTML += `
      <div class="contact-card">
        <div class="contact-icon">📱</div>
        <a href="tel:${contact.phone}" class="contact-value">${contact.phone}</a>
        <div class="contact-label">电话</div>
      </div>
    `;
  }

  if (contact.wechat) {
    contactHTML += `
      <div class="contact-card">
        <div class="contact-icon">💬</div>
        <span class="contact-value">${contact.wechat}</span>
        <div class="contact-label">微信</div>
      </div>
    `;
  }

  if (contact.linkedin) {
    contactHTML += `
      <div class="contact-card">
        <div class="contact-icon">💼</div>
        <a href="${contact.linkedin}" target="_blank" class="contact-value">LinkedIn</a>
        <div class="contact-label">LinkedIn</div>
      </div>
    `;
  }

  if (contact.github) {
    contactHTML += `
      <div class="contact-card">
        <div class="contact-icon">🐙</div>
        <a href="${contact.github}" target="_blank" class="contact-value">GitHub</a>
        <div class="contact-label">GitHub</div>
      </div>
    `;
  }

  container.innerHTML = contactHTML;
}

// 移动端菜单切换
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });

    // 点击链接后关闭菜单
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuBtn.textContent = '☰';
      });
    });
  }
}

// PDF下载功能
function setupPDFDownload() {
  const downloadBtn = document.getElementById('downloadPdfBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const link = document.createElement('a');
      link.href = 'resume.pdf';
      link.download = '童瑶_个人简历.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  loadResumeData();
  setupMobileMenu();
  setupPDFDownload();

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});