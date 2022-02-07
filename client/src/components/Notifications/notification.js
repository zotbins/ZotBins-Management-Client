import { notification } from 'antd'

const openNotification = (name, ID) => {
  notification.warning({
    message: 'Warning',
    description: `ZotBin ${name} (${ID}) is at 95% capacity.`,
    placement: 'topLeft',
  })
}

export { openNotification }
