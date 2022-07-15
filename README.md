# bot-telegram-GAS
Bot Telegram adalah satu satu tool yang sangat handal. Kita bisa melakukan berbagai hal dengannya. Seperti reminding tool, remote control, bahkan input tool for IoT.
Bot ini dapat membaca file dalam google spreadsheet. Langkah - langkahnya adalah :
1. Upload data bot "dataODP_dummy.xlsx" di akun spreadsheet anda, dan buat akun bot telegram pada app telegram menggunakan bot father kemudian copy/simpan token dari bot anda.
2. Setelah ter-upload, pada menu "extensions" pada spreadsheet pilih "Apps Script".
3. Kemudian Paste script code "bot-GAS.js" pada "Apps Script tersebut", masukkan token bot yang anda buat dan masukkan juga sheet id-nya.
4. Save dan jalankan pada apps script, pilih "publish" kemudian "deploy as web app".
5. Pilih new pada menu selanjutnya dan next, kemduian jangan lupa pada setting untuk menghidupkan Google Sheet API di setting apps script anda.
