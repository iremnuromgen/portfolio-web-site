import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';

class NavBar extends StatelessWidget {
  const NavBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(left: 30, top: 15, bottom: 10),
      height: 60,
      color: Colors.transparent,// navbar arka plan rengi
      child: const Row(
        children: [
          Text(
            'PORTFOLIO.',
            style: TextStyle(
              fontSize: 20,
              fontFamily: 'FiraCode',
              color: AppColors.textPrimary,
            ),
          )
        ],
      ),
    );
  }
}
