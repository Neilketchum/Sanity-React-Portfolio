import { defineField, defineType } from 'sanity'

export const blogs =  defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'blogLink',
      title: 'Blog Link',
      type: 'string',
    }),
    defineField({
        name:'image',
        title:'Image Url',
        type:'image',
        options:{
            hotspot:true,
        }
    })
  ]
})
