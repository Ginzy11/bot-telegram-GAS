# bot-telegram-GAS
Bot Telegram adalah satu satu tool yang sangat handal. Kita bisa melakukan berbagai hal dengannya. Seperti reminding tool, remote control, bahkan input tool for IoT.
Bot ini dapat membaca file dalam google spreadsheet. Google sheet adalah salah satu komponen dalam aplikasi google cloud. Jika kita memiliki akun gmail kita bisa membuat dan berbagi sebuah spreadsheet dengan siapapun termasuk dengan mereka yang tidak memiliki akun gmail. Google Sheet secara komprehensif menawarkan sekumpulan fitur dan fungsi standar spreadsheet seperti dalam spreadsheet application lainya yaitu Microsoft Excel. Selain itu juga terdapat dukungan terbaru yang serbaguna yaitu fungsi QUERY dan REGEX. Di dalam google sheet juga disediakan bahasa pemrograman yang disebut GAS (Google App Script). Kode GAS akan dieksekusi secara remote di dalam google cloud. Google App Script adalah bahasa javascript cloud scripting yang menyediakan kemudahan otomasi tugas untuk seluruh produk google dan layanan pihak ketiga.”
Dengan GAS kita bias melakukan :
1. Menulis UDF (user-defined function) untuk google sheet
2. Membuat aplikasi macro
3. Mengembangkan spreadsheet-based application
4. Integrasi dengan Products & Service Google Lainya
5. Mengembangkan Graphical User Interface (GUI) yang berjalan sebagai Web Application
6. Interaksi dengan cloud-based relational database melalui Google JDBC Service.

Langkah - langkahnya adalah :
1. Upload data bot "dataODP_dummy.xlsx" di akun spreadsheet anda, dan buat akun bot telegram pada app telegram menggunakan bot father kemudian copy/simpan token dari bot anda.
2. Setelah ter-upload, pada menu "extensions" pada spreadsheet pilih "Apps Script".
3. Kemudian Paste script code "bot-GAS.js" pada "Apps Script tersebut", masukkan token bot yang anda buat dan masukkan juga sheet id-nya.
4. Save dan jalankan pada apps script, pilih "publish" kemudian "deploy as web app".
5. Pilih new pada menu selanjutnya dan next, kemduian jangan lupa pada setting untuk menghidupkan Google Sheet API di setting apps script anda.
