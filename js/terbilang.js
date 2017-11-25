//mendefinisikan satuan 
var units = [' ',  'ribu ', 'juta', 'milyar',  'triliun', 'biliun'];
//Mendefinisikan bilangan
var angka = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
//membuat function untuk memecah bilangan menjadi array beranggota 3 digit
var digit3 = function(feed) {
  
  //menginisiasi luaran
  var output = '';
  
  if (feed.length % 3 > 0) {
    feed = '00'.substr(0, (3 - feed.length % 3)) + feed;
    //1234 akan diubah menjadi 001234
  }
  //menyisipkan titik sebagai separator 
  //001234 akan diubah menjadi 001.123
  while (/(\d+)(\d{3})/.test(feed)) {
    feed = feed.replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
  }

	var segment3 = feed.split('.'); 
  //Membilang setiap segmen 3 digit
  $.each(segment3, function(i, v){
  	//memecah 3 digit menjadi arrau 1 digit
    var digit = v.split('');
    //menentukan nilai ratusan
    if(digit[0] == '1'){
    	output += 'seratus ';
    }else if(digit[0] != '0'){
   		output += angka[digit[0]] + ' ratus ';  	
    }
    //menentukan nilai puluhan
    if(digit[1] == '1'){
    	if(digit[2] == '0'){
      	output += 'sepuluh ';
      }else{
      	output += angka[digit[2]]+ 'belas '; 
      }          
    }else if(digit[1] != '0'){
    	output += angka[digit[1]] +' puluh ' + angka[digit[2]]+' ';
    }else{
    	if(digit[0] == '0' && digit[1]=='0' && digit[2]=='1'){
      	output += 'se';
      }else{
      	output += angka[digit[2]]+ ' ';
      }
    }
    output += units[segment3.length-i-1]+' ';
  })
  return output;
}


$(document).on('click','#converter', function(){
	var feed = $('#number').val();
	if(isNaN(feed)){
  	alert('Yang anda tulis bukan bilangan')
    return false;
  }
  
  var digits =  
  $('#output').html(digit3(feed))
})
