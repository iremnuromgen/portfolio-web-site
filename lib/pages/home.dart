import 'package:flutter/material.dart';
import 'package:portfolio_site/pages/largescreen/desktop_layout_page.dart';
import 'package:portfolio_site/pages/mobile/mobile_layout_page.dart';
import 'package:portfolio_site/pages/tablet/tablet_layout_page.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
        builder: (context, constraints) {
          if(constraints.maxWidth > 950)
          {
            return const DesktopLayout();
          }
          else if(constraints.maxWidth > 600)
          {
            return const TabletLayout();
          }
          else
          {
            return const MobileLayout();
          }
        }
    );
  }
}