import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';

class TabletLayout extends StatefulWidget {
  const TabletLayout({super.key});

  @override
  State<TabletLayout> createState() => _TabletLayoutState();
}

class _TabletLayoutState extends State<TabletLayout> {
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: AppColors.backgroundPrimary,
      body: Center(
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Yapım Aşamasında',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.white,
                fontFamily: 'FiraCode'
              ),
            ),
            SizedBox(width: 5),
            Image(
              image: AssetImage('assets/images/rocket.png'),
              width: 16,
              height: 16,
            ),
          ],
        ),
      ),
    );
  }
}