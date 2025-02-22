import 'dart:math';
import 'package:flutter/material.dart';
import 'package:portfolio_site/constants/colors.dart';

class Particle {
  late double x, y, dx, dy, size, opacity;
  late Color color;
  bool increasing = true;

  Particle(Size screenSize) {
    final random = Random();
    x = random.nextDouble() * screenSize.width;
    y = random.nextDouble() * screenSize.height;
    dx = (random.nextDouble() * 2 - 1) * 0.5;
    dy = (random.nextDouble() * 2 - 1) * 0.5;
    size = random.nextDouble() * 4 + 2;
    opacity = random.nextDouble() * 0.7 + 0.3;

    final colors = [
      AppColors.wine,
      AppColors.fushiaBlush,
      AppColors.orchidDust,
      AppColors.nude,
      AppColors.oatMilk
    ];
    color = colors[random.nextInt(colors.length)];
  }

  void update(Size screenSize) {
    x += dx;
    y += dy;

    if (x < 0 || x > screenSize.width) dx = -dx;
    if (y < 0 || y > screenSize.height) dy = -dy;

    if (increasing) {
      opacity += 0.01;
      if (opacity >= 1.0) increasing = false;
    } else {
      opacity -= 0.03;
      if (opacity <= 0.1) increasing = true;
    }
  }
}

class ParticlePainter extends CustomPainter {
  final List<Particle> particles;

  ParticlePainter(this.particles);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..maskFilter = const MaskFilter.blur(BlurStyle.normal, 1.0);
    for (final particle in particles) {
      paint.color = particle.color.withOpacity(particle.opacity);
      canvas.drawCircle(Offset(particle.x, particle.y), particle.size, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}

class ParticleAnimation extends StatefulWidget {
  const ParticleAnimation({super.key});

  @override
  _ParticleAnimationState createState() => _ParticleAnimationState();
}

class _ParticleAnimationState extends State<ParticleAnimation>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  final List<Particle> _particles = [];

  @override
  void initState() {
    super.initState();
    final screenSize = WidgetsBinding.instance.platformDispatcher.views.first.physicalSize /
        WidgetsBinding.instance.platformDispatcher.views.first.devicePixelRatio;

    for (int i = 0; i < 130; i++) {
      _particles.add(Particle(screenSize));
    }

    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 100),
    )..addListener(() {
        setState(() {
          for (final particle in _particles) {
            particle.update(screenSize);
          }
        });
      });
    _controller.repeat();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: ParticlePainter(_particles),
      child: Container(),
    );
  }
}