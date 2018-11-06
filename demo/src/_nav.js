export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer icons',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'cui-ban icons',
      attributes: { disabled: true },
    },
    {
      name: 'Download CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'cui-cloud-download icons',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'cui-layers icons',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ]
};
