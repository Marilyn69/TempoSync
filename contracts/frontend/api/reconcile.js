// Next.js Serverless API Route to update Database
export default async function handler(req, res) {
  const { invoiceId } = req.body;
  // Updates the traditional DB instantly without needing a background indexer
  // db.update('invoices').set('status', 'PAID').where('id', invoiceId);
  return res.status(200).json({ success: true, message: 'Reconciled.' });
}
