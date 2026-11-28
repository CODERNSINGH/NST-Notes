# L2 · Moving Data Through the Core

[Lecture slides](../l2.pdf)

Imagine sending a photo. Your phone sends it in small pieces. The Internet moves those pieces one step at a time. This lecture is about how they move, why they wait, and why some may never arrive.

## Slides 1–10 · How data moves

1. **Moving data through the core.** The **core** is the part of the Internet that carries data between networks. **Routers** are devices that pass data along.
2. **Dashboard.** Join the class through the student dashboard.
3. **L1 recap.** The cloud runs on real computers. Cables connect continents. Fast networks also help GPUs work together.
4. **Two calls.** In a classic landline call, part of the network is kept for your call even when you’re quiet. A call over the Internet shares the network with other people. During a pause, a voice app can send less data.
5. **Circuit switching.** The network reserves room for your call from one end to the other. Think of a seat reserved for you. You can use it whenever you need it, and it stays reserved when empty.
6. **Switchboard video.** The operator plugs in cords to connect callers. It gives you a picture of setting up a circuit before people can talk.
7. **How the core moves data.** The next slides show how the Internet shares its links. A **link** is a connection between two devices.
8. **Packets.** A **packet** is a small piece of data sent through a network. Its **header** is like the label on a parcel. Its **payload** is like what’s inside. A router reads the label and decides where to send it next. In **store-and-forward**, the router receives the whole packet before sending it onward.
9. **Sharing on demand.** When you have packets ready, they can use the link. When your app is quiet, other people’s packets can use it. Sharing this way is called **statistical multiplexing**. If a link breaks and another route exists, packets can go that way.
10. **Waiting and loss.** If packets arrive faster than the router can send them, some wait. The **buffer** is the space that holds them. When it fills up, new packets can be dropped. **TCP** can send missing data again when the app uses TCP.

## Slides 11–18 · Why packets take time

11. **Sources of delay.** A packet takes time to check, wait in line, get onto a link, and travel along it.
12. **Toll booth.** Imagine cars entering a highway through a toll booth one by one. The time to get them all through the booth and the time to drive down the highway are two different delays.
13. **Four delays.** **Processing** is checking the packet. **Queuing** is waiting behind other packets. **Transmission** is putting all its bits onto the link. **Propagation** is the signal traveling to the other end of the link.
14. **Booth vs. highway.** A booth that lets more cars through per second cuts the time to get the whole group onto the highway. A longer highway makes the drive take longer. The first idea is transmission. The second is propagation.
15. **Maths divider.** The next two slides give one formula for each of those two delays.
16. **Transmission = packet size ÷ link rate.** Use bits and bits per second. A link at 2 Mbps sends 2,000,000 bits per second. Sending 8,000 bits onto it takes 8,000 ÷ 2,000,000 = 0.004 seconds = **4 ms**. At 4 Mbps it takes **2 ms**, and at 8 Mbps it takes **1 ms**.
17. **Propagation = distance ÷ signal speed.** Use metres and metres per second. In fibre, the signal travels at about 200,000,000 metres per second. Over 200 km, the travel time is **1 ms**.
18. **Satellite lag.** A 500 Mbps link can carry lots of data each second. The signal still has a long way to go. The slide labels about 240 ms as round-trip. The path shown is Earth → satellite → Earth, which is about **240 ms one way**. A reply over the same route adds another 240 ms, making the round trip roughly **480 ms**, before other delays.

## Slides 19–24 · What actually arrives

19. **When packets don’t make it.** Think back to the full buffer on slide 10. If there’s no room for an arriving packet, it can be dropped. That’s **packet loss**.
20. **Throughput and bottlenecks.** **Throughput** is how much data actually arrives each second. On a path with 10, 2, and 5 Mbps links, the 2 Mbps link is the **bottleneck**. The stream gets at most 2 Mbps on that path, and sharing can bring it lower.
21. **Why 300 Mbps can still buffer.** That number describes one part of the trip. A busy link elsewhere or weak home Wi-Fi can slow the video down. The slide gives no measured speeds for the other links, so there’s no way to pick the exact bottleneck from the diagram alone.
22. **Next lecture.** To talk to each other, devices need shared rules. These are called **protocols**. L3 explains how the OSI and TCP/IP models group those rules into layers.
23. **Feedback.** A reminder to fill out the form.
24. **Thank you.** End of the lecture.

## Quick check

1. When a circuit-switched caller goes quiet, can another call use their reserved capacity? **No.**
2. A packet waits behind two others. What delay is that? **Queuing.**
3. What caps throughput on a path with 8, 3, and 10 Mbps links? **The 3 Mbps link.**
4. How long does it take to put 4,000 bits onto a 2 Mbps link? **2 ms.**
