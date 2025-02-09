import 'package:url_launcher/url_launcher.dart';

class SocialMediaService {
  // Sosyal medya hesaplarının linkleri
  static const String githubUrl = 'https://github.com/iremnuromgen';
  static const String linkedinUrl = 'https://linkedin.com/in/iremnur-omgen';
  static const String mediumUrl = 'https://medium.com/@iremnuromgen';

  // Linkleri açma fonksiyonu
  static Future<void> launchUrl(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'URL açılamadı: $url';
    }
  }
}