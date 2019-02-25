---
layout:     post
title:      "Beginner PCB Design with KiCad"
date:       2019-02-24 12:59:00
summary:    Designing a PCB is easier than I once thought. Here is an outline of the video guide that I followed to successfully design my first PCB.
categories: electronics
---

One of our board members recently left [cKeys](https://ckeys.org), and beyond his countless hours of volunteering for events and workshops, he was also our volunteer PCB designer. We are in need of new PCB designs for our soldering workshops, so I and another volunteer board member have been tasked with learning PCB design.

I successfully designed my first working PCB using a [single YouTube tutorial](https://youtu.be/zK3rDhJqMu0). I have dabbled in Eagle and KiCad in the past, which mostly equated to me opening existing schematics and PCB designs and getting lost in the user interfaces. But a single twenty minute YouTube video, and about fifteen hours of self-directed learning[^1] based on the intructions in that video, left me feeling confident in my ability to create future PCBs using KiCad.

Below I have included notes for the different segments of this most efficient KiCad tutorial ever created.[^2] For clarity: I did not make this video and have no affiliation with the author. I am adding notes, comments, and start/stop times for the different segments in an attempt to help others (and my future self) more quickly digest and re-digest this wonderful video.

---

## Schematic Capture Module

The first segment starts with setting up a new project and then explains how to draw the schematic.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=8&end=28" %}

### Create a new library schematic symbol

I skipped this section for my first PCB as I was able to find schematic footprints for all of my components. I plan to refer back to this section in the future when this isn't the case.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=28&end=188" %}

### Place and connect components

The big takeaway from this segment is to learn keyboard shortcuts. Like is always the case with shortcuts, they make this job so much easier!

**Keyboard shortcuts from this section**
- `a` place component
- `m` move component
- `r` rotate component
- `w` run a track

{% include youtubePlayer.html id="zK3rDhJqMu0?start=188&end=403" %}

### Annotate

This step will automatically number all components. Otherwise you would need to manually enter the component numbers. Annotation can be done how it is in this video or it can be optionally added to the next step.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=403&end=422" %}

### Generate Net List

The net list is the necessary first step to linking schematic symbols to PCB footprints.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=422&end=433" %}

### Link schematic symbols in component file

Time to link up the symbols with the footprints.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=433&end=498" %}

---

## PCB Layout Tool

The second segment is where the real magic happens. This first section will create a new PCB layout file, import the net list, and move the components into position.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=537&end=590" %}

### Board outline

Use the `Eco1.User` layer to draw temporary lines. This temporary layer technique works great for making edge cuts with rounded corners. Then use the `Edge.Cuts` layer to draw the real lines using the line and arc tools. Finally, delete the temporary lines on the `Eco1.User` layer.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=590&end=676" %}

### Fill Zones

I only added a ground plane to the keyboard related PCB that I was designing. But this section shows how to add both ground and power planes.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=739&end=852" %}

### Add tracks

Add tracks to the top and/or bottom copper layers.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=852&end=903" %}

### Change power and ground track widths

It is important to make the ground and power tracks thicker than default. If you have a lot of tracks to thicken, then follow this video section. Otherwise, do as I did and just hover over a track and type `e` to edit the width per track. I opt for this simpler (yet more repetitive method) because I find it difficult to recall how to add new net classes via the KiCad UI.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=903&end=1005" %}

### Silkscreen

Time to add text and graphics.

{% include youtubePlayer.html id="zK3rDhJqMu0?start=1036&end=1095" %}

### Wrap up

- Run the design rule check
- Make gerber files
- Generate drill files

{% include youtubePlayer.html id="zK3rDhJqMu0?start=1095&end=1156" %}

## Order PCBs

That's it! It wasn't nearly as hard to design a PCB as I had once thought. The next step is to send the PCB files to a manufacturer. cKeys has always used [PCBWay](https://www.pcbway.com/setinvite.aspx?inviteid=70240)[^3] with success. The turnaround time, despite coming from China, is _FAST!_

I am so grateful for the above video from Windsor Schmidt. Without such a clean and direct video tutorial, I think I would have spent many more hours trying to design my first PCB. I hope these video clips and notes help you in your PCB adventures!

---

[^1]: Most of that fifteen hours was spent re-arranging or fixing mistakes in my schematic and PCB layout.

[^2]: This assumption is based on my limited search for KiCad tutorials; if you know of an equally efficient and high quality tutorial, please let me know.

[^3]: This is a cKeys referral link. At the time of writing, if you place a PCB order using the link above, PCBWay will give cKeys a $20 off discount on cKeys' next order. cKeys is a 501(c)(3) nonprofit organization, so your referral link usage will go to a good cause!
