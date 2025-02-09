import 'package:url_launcher/url_launcher.dart';

class CVService {
  // Dropbox'tan aldığınız doğrudan indirme linki
  static const String cvUrl = 'https://www.dropbox.com/scl/fi/9ebriici3io948xegse6g/iremnuromgencv-en.pdf?rlkey=8j87xxblrd580jfojzp0zliab&st=8e576eu1&dl=1';

  // CV'yi indirme fonksiyonu
  static Future<void> downloadCV() async {
    if (await canLaunch(cvUrl)) {
      await launch(cvUrl);
    } else {
      throw 'CV indirilemedi: $cvUrl';
    }
  }
}