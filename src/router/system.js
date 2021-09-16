import Layout from '@/views/layout';

const router = {
  path: '/system',
  name: 'system',
  component: Layout,
  redirect: '/system/role',
  children: [
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/system/role')
    },
    {
      path: 'users',
      name: 'users',
      component: () => import('@/views/system/users')
    }
  ]
}

export default router