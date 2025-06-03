// schemas/payoutRequest.js
export default {
  name: 'payoutRequest',
  title: 'Payout Requests',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
      description: 'Supabase user ID of the requester',
      validation: Rule => Rule.required()
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
      description: 'Name of the user requesting payout'
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Contact phone number',
      validation: Rule => Rule.required()
    },
    {
      name: 'upiId',
      title: 'UPI ID',
      type: 'string',
      description: 'UPI ID for payment transfer',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address for payment confirmation',
      validation: Rule => Rule.required()
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
      description: 'Payout amount in INR',
      validation: Rule => Rule.required().min(10)
    },
    {
      name: 'referralCode',
      title: 'Referral Code',
      type: 'string',
      description: 'Referral code used by the user'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Rejected', value: 'rejected' }
        ],
        layout: 'radio'
      },
      initialValue: 'pending',
      validation: Rule => Rule.required()
    },
    {
      name: 'requestDate',
      title: 'Request Date',
      type: 'datetime',
      description: 'Date and time when the payout was requested',
      validation: Rule => Rule.required()
    },
    {
      name: 'processedDate',
      title: 'Processed Date',
      type: 'datetime',
      description: 'Date and time when the payout was processed'
    },
    {
      name: 'transactionId',
      title: 'Transaction ID',
      type: 'string',
      description: 'UPI transaction ID or reference number'
    },
    {
      name: 'adminNotes',
      title: 'Admin Notes',
      type: 'text',
      description: 'Notes for administrators regarding this payout'
    }
  ],
  preview: {
    select: {
      title: 'userName',
      subtitle: 'status',
      amount: 'amount'
    },
    prepare(selection) {
      const { title, subtitle, amount } = selection;
      return {
        title: title || 'Unnamed User',
        subtitle: `₹${amount} - ${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}`,
      };
    },
  },
  orderings: [
    {
      title: 'Request Date, New',
      name: 'requestDateDesc',
      by: [
        { field: 'requestDate', direction: 'desc' }
      ]
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'requestDate', direction: 'desc' }
      ]
    },
    {
      title: 'Amount, High',
      name: 'amountDesc',
      by: [
        { field: 'amount', direction: 'desc' }
      ]
    }
  ]
};