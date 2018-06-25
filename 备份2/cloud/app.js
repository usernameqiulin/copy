import Bone from '@bone/bone-mobile';
import HomePage from './app/page/HomePage';
import MorePage from './app/page/MorePage';
import RepeatPage from './app/page/RepeatPage';
import EquipmentPage   from './app/page/EquipmentPage';
import AddActionPage from './app/page/AddActionPage.js'
import SwitchPage  from './app/page/SwitchPage';
import EditPage from './app/page/EditPage';

const app = Bone.createApp({
  appName: 'bone-demo',
  router: {
    routes: [
      {
        path: '/',
        page: HomePage,
        initialProps: {
          title: '定时预约'
        }
      },
      {
        path: '/more',
        page: MorePage,
        initialProps: {
          title: '设定时间'
        }
      },
      {
        path: '/repeat',
        page: RepeatPage,
        initialProps: {
          title: '重复'
        }
      },
      {
        path: '/equipment',
        page: EquipmentPage,
        initialProps: {
          title: '设备动作'
        }
      },
      {
        path: '/addaction',
        page: AddActionPage,
        initialProps: {
          title: '添加'
        }
      },
      {
        path: '/switch',
        page: SwitchPage,
        initialProps: {
          title: '电源开关'
        }
      },
      {
        path: '/edit',
        page: EditPage,
        initialProps: {
          title: '编辑预约'
        }
      }
    ]
  },
  extensions: {
    middlewares: [] // 目前仅支持标准redux中间件
  }
});
app.start();
