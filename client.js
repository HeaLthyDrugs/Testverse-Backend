import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'lm9rfmj5',
  dataset: 'production',
  apiVersion: 'v2022-03-07', // Use current date in YYYY-MM-DD format
  token: 'skXFaAXQb1ZXAB0Cpt7WrIZbpQRWQaeQ62cZ8sYcMQ1UKJ8Uwz7pDVHTiMxrknRUAkrtPKA3VN4e2e1Wah1XtSuBzF8FQnI5Lqvi6frMxnOjc0Denj6kRSG4kuo1L2kk3B5G4vdKqVR8VRcpOz8MhvaLGWCel2cVFSTrZUS7r6eabAnd4MEI', // You'll need a token with write access
  useCdn: false
}) 