import Layout from '@/views/layout';
const router =
{
  path: '/organization',
  name: 'organization',
  component: Layout,
  redirect: '/organization/person',
  children: [
    {
      path: 'person',
      name: 'person',
      component: () => import('@/views/organization/person')
    },
    {
      path: 'other',
      component: () => import('@/views/organization/other'),
      redirect: '/organization/other/department',
      children: [
        {
          path: 'department',
          name: 'department',
          component: () => import('@/views/organization/other/department')
        },
        {
          path: 'test',
          name: 'test',
          component: () => import('@/views/organization/other/test')
        }
      ]
    },
  ]
}

export default router;