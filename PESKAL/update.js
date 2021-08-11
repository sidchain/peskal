window.onload = function(){
            var result = confirm('PESKAL tersedia versi terbaru. Update sekarang?');
            if(result==true){
                window.open('http://peskal.devanka.my.id', '_blank');
                setTimeout(function(){ window.close(); }, 2000);
            }
            else
            {
                alert('PESKAL tidak diperbarui, menutup aplikasi..');
                window.close();
            }
        }
