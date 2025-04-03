import 'package:url_launcher/url_launcher.dart';

class CVService {
  // Dropbox'tan aldığınız doğrudan indirme linki
  static const String cvUrl = 'https://www.dropbox.com/scl/fi/u2s0kiyuwd0jnff05qc35/iremnur-omgen-cv-en.pdf?rlkey=jftknkoammlaiswls1y6hpmh0&st=jrsrm04y&dl=0';

  // CV'yi indirme fonksiyonu
  static Future<void> downloadCV() async {
    if (await canLaunch(cvUrl)) {
      await launch(cvUrl);
    } else {
      throw 'CV indirilemedi: $cvUrl';
    }
  }
}