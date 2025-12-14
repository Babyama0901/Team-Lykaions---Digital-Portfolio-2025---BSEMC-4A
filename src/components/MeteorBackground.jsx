import React, { useEffect, useRef } from 'react';

const MeteorBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const STAR_COUNT = 100;
        const METEOR_COUNT = 10;

        let width, height;
        let stars = [];
        let meteors = [];

        // Resize handler
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        // Star class
        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2;
                this.opacity = Math.random();
                this.speed = Math.random() * 0.05;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                this.opacity += (Math.random() - 0.5) * 0.05;
                if (this.opacity < 0) this.opacity = 0;
                if (this.opacity > 1) this.opacity = 1;
            }
        }

        // Meteor class
        class Meteor {
            constructor() {
                this.reset();
            }

            reset() {
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 10 + 5;
                this.angle = Math.PI / 4; // 45 degrees
                this.opacity = 0; // Start invisible
                this.fadingIn = true;
                this.life = 0;
                this.maxLife = Math.random() * 100 + 50;

                // Spawn on top edge or left edge to ensure top-left to bottom-right flow
                if (Math.random() < 0.5) {
                    // Top edge
                    this.x = Math.random() * width;
                    this.y = -this.length;
                } else {
                    // Left edge
                    this.x = -this.length;
                    this.y = Math.random() * height;
                }
            }

            draw() {
                // Gradient trail with dynamic opacity
                const gradient = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - this.length * Math.cos(this.angle),
                    this.y - this.length * Math.sin(this.angle)
                );
                // Head is brighter, tail fades out
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - this.length * Math.cos(this.angle),
                    this.y - this.length * Math.sin(this.angle)
                );
                ctx.stroke();
            }

            update() {
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);
                this.life++;

                // Fade in
                if (this.fadingIn) {
                    this.opacity += 0.05;
                    if (this.opacity >= 1) {
                        this.opacity = 1;
                        this.fadingIn = false;
                    }
                }

                // Fade out near end of life or screen
                if (this.life > this.maxLife - 20) {
                    this.opacity -= 0.05;
                }

                // Reset if dead or off screen
                if (this.opacity <= 0 || this.x > width + 100 || this.y > height + 100) {
                    this.reset();
                }
            }
        }

        const initStars = () => {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star());
            }
        };

        const initMeteors = () => {
            meteors = [];
            for (let i = 0; i < METEOR_COUNT; i++) {
                meteors.push(new Meteor());
            }
        };

        const drawCursorGlow = () => {
            const gradient = ctx.createRadialGradient(
                mouseRef.current.x, mouseRef.current.y, 0,
                mouseRef.current.x, mouseRef.current.y, 150
            );
            gradient.addColorStop(0, 'rgba(100, 100, 255, 0.15)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw background gradient
            const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
            bgGradient.addColorStop(0, '#0f0c29');
            bgGradient.addColorStop(0.5, '#302b63');
            bgGradient.addColorStop(1, '#24243e');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, width, height);

            // Draw Cursor Glow
            drawCursorGlow();

            // Draw Stars
            stars.forEach(star => {
                star.update();
                star.draw();
            });

            // Draw Meteors
            meteors.forEach(meteor => {
                meteor.update();
                meteor.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resize();
        initMeteors();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default MeteorBackground;
