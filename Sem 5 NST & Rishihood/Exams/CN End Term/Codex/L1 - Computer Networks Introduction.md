# L1 · Computer Networks Introduction

[Lecture slides](../l1.pdf) · [CN course tracker](https://docs.google.com/spreadsheets/d/1QZcCfnM8w7jRrV8Uv0rM4nobSZzLNiq6zvsZMcJ0dA4/edit?gid=102#gid=102)

Think of opening a reel. Your phone asks another computer for the video. The network carries your request there and the video back.

## Slides 1–7 · The cloud

1. **Introduction.** A network connects devices so they can send data to each other. A **protocol** is a set of rules they agree to follow.
2. **Dashboard.** The slide asks you to join class through your student dashboard.
3. **The cloud.** A cloud service uses computers somewhere else to store or process your data. Think of opening a backed-up photo on a new phone.
4. **Many computers.** A **server** is a computer that responds to requests. A **rack** holds several servers.
5. **Many racks.** A **data center** is a facility full of these racks. Many servers can handle many users at once.
6. **Servers talk to each other.** One server might ask another to fetch your photos. They use a network to communicate, even inside the same building.
7. **AWS, Azure, and Google Cloud.** These are cloud providers. **Latency** is how long you wait. **Throughput** is how much data actually arrives each second.

## Slides 8–14 · How networks connect places

8. **ARPANET.** In 1969, UCLA tried to log in to a computer at the Stanford Research Institute. Only **LO** arrived before the system crashed. [Original account](https://www.lk.cs.ucla.edu/internet_first_words.html)
9. **The Internet.** It's many networks connected together. Your home network connects to your internet provider, which can reach other networks.
10. **Network sizes.** **PAN** means personal area, like a phone and earbuds. **LAN** means local area, like home Wi-Fi. **MAN** means metropolitan area, like a network across a city. **WAN** means wide area, like a company network connecting Delhi and Mumbai.
11. **Undersea cables.** Fiber-optic cables carry data as light between places separated by oceans. The slide gives 597 cable systems as its 2025 snapshot.
12. **Protecting cables.** The picture shows a ship pulling a plough that can bury the cable. Fixing underwater cables takes specialist ships and equipment.
13. **Anchors and fishing gear.** These can snag and damage cables. When another route is available, traffic can go around the break. [Cable protection FAQ](https://www.iscpc.org/news/media-enquiries/)
14. **Sharks.** The video shows a fish biting a cable. Anchors and fishing gear cause far more damage. [Cable fault records](https://www.iscpc.org/documents/?id=1959)

## Slides 15–20 · Instagram, Netflix, and layers

15. **Opening Instagram.** If the reel needs to be fetched, the simple path is **phone → home Wi-Fi router → internet provider → video server**. The server sends the video back. **DNS** helps look up the server's address if an address is needed. A **CDN** can deliver video from a nearby server.
16. **Netflix buffering.** The app keeps some video ready to play. That's the **buffer**. If new video arrives slower than you watch it, the buffer shrinks. When it runs out, playback pauses. For example, if the stream needs 5 Mb/s and only 3 Mb/s arrives, the buffer shrinks by 2 megabits every second.
17. **Course goal.** Learn how data gets from one device to another and what can slow it down.
18. **Top-down approach.** First ask what the app wants to do. Then see what the network does to make it happen.
19. **Five layers.** Application makes requests. Transport delivers data between apps. Network gets packets across networks. Link moves data to the next device on the path. Physical sends the actual signal through air or cable.
20. **GPU networks.** GPUs working on the same AI model need to share results. A slow connection can make them wait for each other.

## Slides 21–27 · Course information

21. **What you'll learn.** How devices communicate, how to set up networks in labs, and how to protect network traffic.
22. **Introduction wraps up.** The slide welcomes you to the rest of the course.
23. **Grades.** Contests 20%, projects 20%, midterm 20%, end term 40%.
24. **Books section.** The next slide lists the course books.
25. **Books.** *Computer Networking: A Top-Down Approach* by Kurose and Ross, and *Data Communications and Networking* by Forouzan.
26. **Feedback.** The slide asks you to fill in the class feedback form.
27. **Thank you.** End of the introduction.

## Quick check

1. Phone and Bluetooth earbuds form what kind of network? **PAN.**
2. If a video plays faster than new data arrives, what happens? **The buffer shrinks. Playback pauses if it empties.**
3. Which layer moves an IP packet across networks? **The network layer.** Which layer moves data across the current link? **The link layer.**
