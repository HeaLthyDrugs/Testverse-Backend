
export default {
    name: 'examNotification',
    title: 'Exam Notification',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(100)
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(10)
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'datetime',
        validation: Rule => Rule.required().min(Rule.valueOfField('startDate'))
      },
      {
        name: 'pdfFile',
        title: 'PDF File',
        type: 'file',
        options: {
          accept: 'application/pdf'
        },
        validation: Rule => Rule.required()
      }
    ]
  };
  