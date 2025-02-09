import 'package:http/http.dart' as http;

class MailService {
  static const String _getFormUrl = 'https://getform.io/f/amddqelb';

  // Form verilerini gönderme fonksiyonu
  static Future<bool> sendForm({
    required String name,
    required String email,
    required String subject,
    required String message,
  }) async {
    try {
      // Gönderilecek veriler
      final Map<String, String> data = {
        'name': name,
        'email': email,
        'subject': subject,
        'message': message,
      };

      // POST isteği gönder
      final response = await http.post(Uri.parse(_getFormUrl), body: data);

      // Başarılı gönderim durumunda true döndür
      if (response.statusCode == 200) {
        return true;
      } else {
        // Hata durumunda false döndür
        return false;
      }
    } catch (e) {
      // Hata yakalama
      print('Mail gönderilirken hata oluştu: $e');
      return false;
    }
  }
}