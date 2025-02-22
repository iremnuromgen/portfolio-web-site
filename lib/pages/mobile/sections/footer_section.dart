import 'package:flutter/material.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 300,
      padding: const EdgeInsets.all(20),
      color: const Color.fromARGB(255, 0, 0, 0), // Arka plan rengi
      child: const Column(
        children: [
          SizedBox(height: 200), // Çizginin üstüne boşluk ekledik
          // Yatay çizgi
          SizedBox(
            width: 1500,
            child: Divider(
              color: Color.fromARGB(190, 243, 224, 209),
              thickness: 1,
            ),
          ),
          SizedBox(height: 10),
          // Alt kısımda yazılar
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Text(
                    "Built with Flutter.",
                    style: TextStyle(color: Color.fromARGB(150, 200, 200, 200), fontSize: 11), // Daha soluk renk
                  ),
                  SizedBox(width: 5),
                  Image(
                    image: AssetImage('assets/images/rocket.png'),
                    width: 12,
                    height: 12,
                  ),
                ],
              ),
              Text(
                "© 2025 İremnur Ömgen. All rights reserved.",
                style: TextStyle(color: Color.fromARGB(150, 200, 200, 200), fontSize: 11), // Daha soluk renk
              ),
            ],
          ),
        ],
      ),
    );
  }
}