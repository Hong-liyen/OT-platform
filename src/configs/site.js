export const MENU_LIST = [
  {
    name: 'account',
    text: '账号管理',
    icon: 'id-card',
    child: [
      { name: 'user-info', text: '基本资料' },
      { name: 'main-share', text: '大股东' },
      { name: 'share', text: '股东' },
      { name: 'general-agent', text: '总代' },
      { name: 'login-diary', text: '登录日志' },
      { name: 'rebate-setting', text: '返点设置' }
    ]
  },
  {
    name: 'money',
    text: '现金系统',
    icon: 'hand-holding-usd',
    child: [
      { name: 'user-info', text: '存取款设定' },
      { name: 'user-level', text: '层级管理' },
      { name: 'payment-config', text: '支付平台设定' },
      { name: 'funds-out-in-recording', text: '出入款记录' },
      { name: 'funds-out-in', text: '人工线上存提' },
      { name: 'money-adjust', text: '额度转换' },
      { name: 'money-search', text: '现金流查询' },
      { name: 'audit-search', text: '稽核查询' },
      { name: 'account-summary', text: '出入款总账' }
    ]
  },
  {
    name: 'operation',
    text: '运营管理',
    icon: 'futbol',
    child: [
      { name: 'rebate-statistics', text: '返水统计' },
      { name: 'rebate-search', text: '返水查询' },
      { name: 'agent-rebate-search', text: '代理返水查询' }
    ]
  },
  {
    name: 'platform',
    text: '平台管理',
    icon: 'tv',
    child: [
      { name: 'announcement', text: '网站咨询系统' },
      { name: 'bulletin', text: '公告管理' }
    ]
  },
  {
    name: 'reports',
    text: '报表管理',
    icon: 'file-alt',
    child: [
      { name: 'reports', text: '报表' },
      { name: 'profit-reports', text: '月结对账系统' }
    ]
  },
  {
    name: 'users',
    text: '員工管理',
    icon: 'users',
    child: [
      { name: 'user-sub', text: '子账号' }
    ]
  },
  {
    name: 'notes',
    text: '注单管理',
    icon: 'file-archive',
    child: [
      { name: 'user-sub', text: '子账号' }
    ]
  },
  {
    name: 'character',
    text: '角色管理',
    icon: 'chess-rook'
  },
  {
    name: 'calendar',
    text: '日志管理',
    icon: 'calendar',
    child: [
      { name: 'login-recording', text: '登入记錄' },
      { name: 'operate-recording', text: '操作记錄' }
    ]
  }
]