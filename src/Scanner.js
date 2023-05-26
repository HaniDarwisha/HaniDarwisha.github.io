import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';


export default function QRScanner() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('qr-reader', { fps: 10 });

    scanner.render(onScanSuccess, onScanError);

    function onScanSuccess(qrCodeMessage) {
      console.log('QR code scanned:', qrCodeMessage);
      // Handle the scanned QR code message here
    }

    function onScanError(error) {
      console.error('QR code scan error:', error);
      // Handle the scan error here
    }
    

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div>
      <h2>QR Scanner</h2>
      <div id="qr-reader"></div>
    </div>
  );
}
