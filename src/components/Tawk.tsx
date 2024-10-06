import Script from 'next/script';

export default function Tawk() {
  return (
    <div>
      {/* Tawk.to Script */}
      
      <Script
        id="tawk-to-script"
        strategy="afterInteractive" // Sayfa yüklendikten sonra script çalıştırılır
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/67028af4256fb1049b1e1382/1i9gutipc';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    </div>
  );
}
