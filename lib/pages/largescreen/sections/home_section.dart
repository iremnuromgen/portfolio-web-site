import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';
import 'package:portfolio_site/services/cv_service.dart';
import 'package:portfolio_site/services/social_media_service.dart';


class HomeSection extends StatelessWidget {
  const HomeSection({super.key}); 

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: MediaQuery.of(context).size.height,
      color: Colors.transparent,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text(
            'Hello,',
            style: TextStyle(
              color: AppColors.textPrimary,
              fontSize: 45,
              fontFamily: 'FiraCode',
              fontWeight: FontWeight.w600,
              decoration: TextDecoration.none,
            ),
          ),
          const Text(
            'I\'m İrem',
            style: TextStyle(
              color: AppColors.textPrimary,
              fontSize: 45,
              fontFamily: 'FiraCode',
              fontWeight: FontWeight.w600,
              decoration: TextDecoration.none,
            ),
          ),
          Stack(
            alignment: Alignment.center,
            children: [
              Text(
                'Jr. Mobile Developer',
                style: TextStyle(
                  fontSize: 50,
                  fontFamily: 'FiraCode',
                  decoration: TextDecoration.none,
                  color: AppColors.textPrimary.withOpacity(0.4),
                  shadows: [
                    for (int i = 0; i < 4; i++)
                      Shadow(
                        color: AppColors.wine.withOpacity(0.5),
                        blurRadius: 10.0 + i * 4.0,
                      ),
                  ],
                ),
              ),
              const Text(
                'Jr. Mobile Developer',
                style: TextStyle(
                  fontSize: 50,
                  fontFamily: 'FiraCode',
                  color: AppColors.textPrimary,
                  decoration: TextDecoration.none,
                ),
              ),
              Text(
                'Jr. Mobile Developer',
                style: TextStyle(
                  fontSize: 50,
                  fontFamily: 'FiraCode',
                  decoration: TextDecoration.none,
                  foreground: Paint()
                    ..style = PaintingStyle.stroke
                    ..strokeWidth = 1.8
                    ..color = AppColors.wine,
                ),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: () => SocialMediaService.launchUrl(SocialMediaService.githubUrl),
                icon: Image.asset(
                  'assets/images/github.png',
                  width: 40,
                  height: 40,
                ),
              ),
              const SizedBox(width: 15),
              IconButton(
                onPressed: () => SocialMediaService.launchUrl(SocialMediaService.linkedinUrl),
                icon: Image.asset(
                  'assets/images/linkedin.png',
                  width: 40,
                  height: 40,
                ),
              ),
              const SizedBox(width: 15),
              IconButton(
                onPressed: () => SocialMediaService.launchUrl(SocialMediaService.mediumUrl),
                icon: Image.asset(
                  'assets/images/medium.png',
                  width: 40,
                  height: 40,
                ),
              ),
              const SizedBox(width: 15),
              ElevatedButton(
                onPressed: CVService.downloadCV,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color.fromARGB(173, 116, 28, 40), // Butonun arka plan rengi
                  foregroundColor: AppColors.oatMilk, // Yazı rengi
                  padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20), // Genişlik ve yükseklik ayarı
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12), // Kenar yuvarlaklığı
                    side: const BorderSide(color: Color.fromARGB(173, 243, 224, 209)), // Kenarlık rengi
                  ),
                ),
                child: const Text(
                  "Download CV",
                  style: TextStyle(
                    fontFamily: 'FiraCode',
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textPrimary
                  ),
                )
              )
            ],
          )
        ],
      ),
    );
  }
}
