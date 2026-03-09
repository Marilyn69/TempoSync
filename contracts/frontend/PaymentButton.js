import { ethers } from 'ethers';

// Demo snippet showing Tempo's deterministic finality and metadata features
export default async function handlePayment(invoiceId, amount, merchantAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract("0xTempo...", ["function payInvoice(address,address,string,uint256)"], signer);
    
    // Execute payment with stablecoin and invoice metadata on Tempo
    const tx = await contract.payInvoice("0xUSDC...", merchantAddress, invoiceId, amount);
    await tx.wait(); // Wait for 0.5s deterministic finality
    
    // Trigger serverless database update immediately
    fetch('/api/reconcile', { method: 'POST', body: JSON.stringify({ invoiceId }) });
    alert("Paid and reconciled instantly!");
}
