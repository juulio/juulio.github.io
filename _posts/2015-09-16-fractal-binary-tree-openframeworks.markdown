---
layout: post
title:  "Fractal Binary Tree - openframeworks"
date:   2015-09-16 16:23:14
categories: jekyll update
---
Back in 2014, I wrote a recursive program that draws a fractal binary tree. My initial goal was to draw something like this:

<img src="{{ "/img/2015set/beniceEquationFractalBinaryTree.png" | prepend: site.url }}" alt="Benice Equation Fractal Tree" />

I had a hard time understanding how to create a recursive function that worked properly with openframeworks loops. The way to make it work was to use a frame rate of 1 frame per second ofSetFrameRate(1) on the setup function and add an int number that defines the amount of iterations as a limit.
Here are some interesting screenshots that happened on the way.

{% highlight c++ %}
#include "ofApp.h"

#define DEPTH 8

int lineLength, startingPointX, startingPointY;
float rotationAngle, angleOffset, fractalProportion;

int frameNumber;
ofTrueTypeFont font;
string appInfo;

/--------------------------------------------------------------
void ofApp::setup(){
    ofSetFrameRate(1);
    //ofBackground(0,0,0);

    lineLength = 8;
    rotationAngle = 10.0;
    angleOffset = 2;
    fractalProportion = 0.8;
    startingPointX = ofGetWidth()/2;
    startingPointY = ofGetHeight()-300;

    // Code for debugging (not required)
    frameNumber = 0;
    appInfo = "";
    font.loadFont("verdana.ttf", 9, true, true, true);
}

//--------------------------------------------------------------
void ofApp::update(){
    frameNumber++;
    //appInfo = "depth: " + ofToString(DEPTH) + "\n";
}

//--------------------------------------------------------------

void ofApp::draw(){
    font.drawString(appInfo, 2, 12);
    //drawTrunk(DEPTH, rotationAngle);
    drawTrunk(frameNumber, rotationAngle);
}

//--------------------------------------------------------------
void ofApp::drawTrunk(int depth, float angle) {
    ofTranslate(startingPointX, startingPointY);
    ofSetLineWidth(depth*4);
    ofSetColor(0);
    ofLine(0,ofGetHeight(),0,0);
    drawBranch(depth, angle);
}

//--------------------------------------------------------------
void ofApp::drawBranch(int depth, float angle) {
    float newAngle = angle + angleOffset;

    ofPushMatrix();
    ofRotate(newAngle);
    drawLeaf(depth, newAngle);
    ofPopMatrix();
    ofRotate(-newAngle);
    drawLeaf(depth, newAngle);
}

//--------------------------------------------------------------
void ofApp::drawLeaf(int depth, float angle) {
    int leafLength = lineLength*depth,
    leafSize = 20;

    //appInfo += ofToString(leafLength)+"\n";
    ofTranslate(0,-leafLength);
    ofSetLineWidth(depth);

    ofLine(0,leafLength,0,0);

    if(depth == 0) {
        ofEnableAlphaBlending();
        ofSetColor(ofRandom(255),0,0,15);

        if (ofRandom(100) > 0) {
            ofFill();
            ofEllipse(0,0,leafSize,leafSize);
        }
        ofSetColor(255,255,255);
    }
    if(depth>0){
        drawBranch(depth-1, angle);
    }
}

{% endhighlight %}
