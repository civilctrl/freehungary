export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d3d5aeb7de59290a7710aa5',
                  title: 'Sanity Studio',
                  name: 'freehungary-studio',
                  apiId: 'c73149ac-277f-46ec-bcc8-665c86feb7a5'
                },
                {
                  buildHookId: '5d3d5aeb891ee05992fbea1f',
                  title: 'Blog Website',
                  name: 'freehungary',
                  apiId: '3b5ee128-3611-4d96-a927-bd4c81962f84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/civilctrl/freehungary',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://freehungary.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
