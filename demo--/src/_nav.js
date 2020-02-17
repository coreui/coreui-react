export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'cil-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'cil-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'cil-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ]
};
