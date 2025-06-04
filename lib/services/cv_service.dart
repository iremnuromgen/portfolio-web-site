import 'package:url_launcher/url_launcher.dart';

class CVService {
  // Dropbox'tan aldığınız doğrudan indirme linki
  static const String cvUrl = 'https://www.dropbox.com/scl/fi/8zzxgdz8okkfu5a1nxbwt/iremnur-omgen-cv.pdf?rlkey=vp529gostcilitiuzrwpesl4a&st=6a7npjku&dl=0';

  // CV'yi indirme fonksiyonu
  static Future<void> downloadCV() async {
    if (await canLaunch(cvUrl)) {
      await launch(cvUrl);
    } else {
      throw 'CV indirilemedi: $cvUrl';
    }
  }
}