import {defineField,defineType} from 'sanity'

export const testimonial = defineType({
    name:'testimonials',
    title:'Testimonials',
    type:'document',
    fields:[defineField({
        name:'name',
        title:'Name',
        type:'string'
    }),defineField({
        name:'company',
        title:'Company',
        type:'string'
    }),defineField({
        name:'feedback',
        title:'Feedback',
        type:'string'
    }),defineField({
        name:'image',
        title:'Image Url',
        type:'image',
        options:{
            hotspot:true,
        }
    })]
    }
)