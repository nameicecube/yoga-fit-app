/**
 * YOGA FIT - Complete 28-Day Professional Yoga Program
 * Beginner → Intermediate → Expert progression
 * Each day includes: Teacher voice scripts, detailed instructions, benefits, precautions, and images
 * Program automatically repeats after Day 28
 */

import type { Exercise, UserLevel } from '@/types/yoga';

export const EXERCISES: Exercise[] = [
  // ==========================================
  // WEEK 1: BEGINNER FOUNDATION (Days 1-7)
  // ==========================================
  
  {
    id: 'bg-day1',
    title: 'Morning Awakening Flow - Balasana & Basics',
    description: 'Gentle stretches including Child\'s Pose (Balasana) to wake up your body and mind',
    level: 'BEGINNER',
    category: 'MORNING_STRETCH',
    duration: 20,
    day: 1,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8shxkp11al0bpq82a03ac9-y2v3qofKXiIKweoGxeQcfWylZSaPzm.jpg?download=1',
    teacherScript: `
Welcome to your first day of yoga practice. Today we'll gently awaken your body with simple, foundational poses.

Let's begin in Child's Pose - Balasana. Kneel on your mat and sit back on your heels. Now extend your arms forward and rest your forehead on the mat. Take a deep breath in through your nose, and slowly breathe out. Feel your back expand with each inhale. Stay here for one full minute, breathing deeply and naturally.

Now let's move into Cat-Cow pose - Marjaryasana-Bitilasana. Come onto your hands and knees. As you inhale, arch your back and look upward - this is Cow pose. As you exhale, round your spine and tuck your chin to chest - this is Cat pose. Flow smoothly between these two positions for ten repetitions, moving with your breath.

Next, we'll practice Downward Facing Dog - Adho Mukha Svanasana. From hands and knees, tuck your toes under and lift your hips up and back. Press your hands firmly into the mat and straighten your legs as much as is comfortable. Hold this position for thirty seconds, breathing steadily.

Stand up and come into Mountain Pose - Tadasana. Stand tall with your feet hip-width apart and extend your arms overhead. Reach up through your fingertips, lengthening your entire spine. Feel grounded through your feet while extending upward. Hold for thirty seconds.

Finally, let's do a Seated Forward Fold - Paschimottanasana. Sit down with your legs extended straight in front of you. Fold forward from your hips, not your waist, reaching toward your feet. Relax your neck and shoulders completely. Hold for one minute, breathing deeply.

Excellent work on your first day!
    `,
    instructions: [
      '🧘 BALASANA (Child\'s Pose): Kneel on mat, sit back on heels, extend arms forward with forehead to mat. Breathe deeply for 1 minute',
      '🐱 MARJARYASANA-BITILASANA (Cat-Cow): On hands and knees, inhale arch back (cow), exhale round spine (cat). Flow for 10 repetitions',
      '🐕 ADHO MUKHA SVANASANA (Downward Facing Dog): From hands and knees, tuck toes, lift hips up and back. Hold 30 seconds',
      '🏔️ TADASANA (Mountain Pose): Stand tall, feet hip-width, arms overhead. Reach up, lengthening spine. Hold 30 seconds',
      '🙇 PASCHIMOTTANASANA (Seated Forward Fold): Sit with legs extended, fold forward from hips. Hold 1 minute',
    ],
    benefits: [
      'Increases blood circulation throughout body',
      'Gently wakes up the spine and joints',
      'Improves flexibility in hamstrings and back',
      'Reduces morning stiffness and tension',
      'Calms the mind and prepares for the day',
    ],
    precautions: [
      'Move slowly and mindfully if you have back issues',
      'Avoid deep forward folds if you have disc problems',
      'Keep knees slightly bent if hamstrings are tight',
      'Listen to your body - never force any position',
    ],
  },

  {
    id: 'bg-day2',
    title: 'Pranayama Foundations - Breath Control',
    description: 'Foundation pranayama techniques including Nadi Shodhana and Ujjayi breathing',
    level: 'BEGINNER',
    category: 'PRANAYAMA',
    duration: 15,
    day: 2,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8si8c811an0bpq9iighm5e-jabl6fbm8vHpnhYYUtsS9TvNx8KniE.jpg?download=1',
    teacherScript: `
Today we'll explore the power of breath - pranayama. Breath is the bridge between body and mind.

Sit comfortably in Easy Pose - Sukhasana - or Lotus position if that's available to you. Keep your spine straight but not rigid. Rest your hands on your knees with your thumb and index finger touching - this is Chin Mudra.

Let's begin with Three-Part Breath - Dirgha Pranayama. Breathe deeply into your belly first, then expand your ribcage, and finally fill your chest. Now exhale in reverse order - chest, ribs, then belly. Feel each breath expanding and contracting your body. Practice this for five minutes, finding your natural rhythm.

Now we'll practice Alternate Nostril Breathing - Nadi Shodhana. Bring your right hand up. Use your right thumb to close your right nostril. Inhale slowly through your left nostril. Now close your left nostril with your ring finger, release your thumb, and exhale through your right nostril. Inhale through the right, then switch and exhale through the left. This is one complete round. Practice ten rounds slowly and mindfully.

Next is Ujjayi Pranayama - Ocean Breath. Slightly constrict the back of your throat to create a soft ocean-like sound as you breathe. Breathe slowly and steadily through your nose. The sound should be gentle and soothing. Practice for five minutes.

Finally, return to natural breathing. Simply observe your breath without trying to control it. Focus on the sensations of breathing. Notice the air entering and leaving your nostrils. Continue for three minutes.

Beautiful practice today. Notice how calm and centered you feel.
    `,
    instructions: [
      '🧘 SETUP: Sit in Sukhasana or Padmasana with spine straight. Hands in Chin Mudra (thumb and index finger touching)',
      '💨 DIRGHA PRANAYAMA (Three-Part Breath): Breathe into belly, ribcage, chest. Exhale in reverse. 5 minutes',
      '👃 NADI SHODHANA (Alternate Nostril): Thumb closes right nostril, inhale left. Switch, exhale right. 10 rounds',
      '🌊 UJJAYI PRANAYAMA (Ocean Breath): Constrict throat slightly, creating ocean sound. 5 minutes',
      '🧘 MEDITATION: Natural breathing, observe without controlling. 3 minutes',
    ],
    benefits: [
      'Balances and calms the nervous system',
      'Increases lung capacity and oxygen intake',
      'Reduces stress, anxiety, and mental tension',
      'Improves focus, concentration, and mental clarity',
      'Balances left and right brain hemispheres',
    ],
    precautions: [
      'Never force or strain the breath',
      'Stop immediately if you feel dizzy or lightheaded',
      'Practice on empty stomach (2-3 hours after eating)',
      'Consult doctor if you have respiratory conditions',
    ],
  },

  {
    id: 'bg-day3',
    title: 'Virabhadrasana & Standing Asanas',
    description: 'Warrior poses and foundational standing yoga postures for strength and stability',
    level: 'BEGINNER',
    category: 'BASIC_ASANAS',
    duration: 20,
    day: 3,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8shs8x11ak0bpqbgrm1lnb-hGpUZKxs9XshkbNBjdunVdRXKzcYkZ.jpg?download=1',
    teacherScript: `
Today we build strength and stability through standing warrior poses. These poses embody the spirit of a peaceful warrior - strong yet calm.

Begin in Mountain Pose - Tadasana. Stand with your feet hip-width apart, weight evenly distributed on both feet. Engage your thigh muscles and lengthen through your spine. Arms rest by your sides. Find your center and stand tall. Hold for one minute, breathing naturally.

Now let's move into Warrior One - Virabhadrasana I. Step your right foot back three to four feet. Turn your right foot out about forty-five degrees. Bend your left knee directly over your ankle. Raise your arms overhead, palms facing each other. Square your hips to face forward. Hold for thirty seconds. Feel the strength in your legs. Now switch sides and repeat on the other side.

From Warrior One, we'll transition to Warrior Two - Virabhadrasana II. Keep your legs in the same position, but now open your hips to the side. Extend your arms parallel to the floor, reaching in opposite directions. Gaze over your front hand. Keep your front knee bent and your chest open. Hold for thirty seconds on each side.

Next is Triangle Pose - Trikonasana. Straighten your front leg. Reach forward with your front arm, then hinge down, bringing your hand to your shin or the floor. Extend your top arm straight up toward the ceiling. Keep both legs straight and your chest open. Hold for thirty seconds, then switch sides.

Finally, let's practice Tree Pose - Vrksasana. Stand on your left foot and place your right foot on your inner left thigh or calf - avoid the knee joint. Bring your hands to your heart center or extend them overhead. Find your balance point. Hold for thirty seconds, then switch sides.

Wonderful work today building your foundation of strength!
    `,
    instructions: [
      '🏔️ TADASANA (Mountain Pose): Stand feet hip-width, spine tall, arms by sides. Hold 1 minute',
      '⚔️ VIRABHADRASANA I (Warrior I): Step back, bend front knee over ankle, arms overhead. Hold 30 sec each side',
      '⚔️ VIRABHADRASANA II (Warrior II): Open hips to side, arms parallel to floor. Hold 30 sec each side',
      '📐 TRIKONASANA (Triangle): Straighten front leg, reach down to shin, top arm up. Hold 30 sec each side',
      '🌳 VRKSASANA (Tree): Balance on one foot, other foot on inner thigh/calf. Hold 30 sec each side',
    ],
    benefits: [
      'Builds strength in legs, quadriceps and glutes',
      'Improves balance, stability, and body awareness',
      'Opens hips, chest, and shoulders',
      'Enhances concentration and mental focus',
      'Develops grounding and confidence',
    ],
    precautions: [
      'Use wall support for balance poses if needed',
      'Keep front knee aligned over ankle, not past toes',
      'Bend knees slightly if hamstrings are tight',
      'Avoid deep knee bends if you have knee issues',
    ],
  },

  {
    id: 'bg-day4',
    title: 'Hip Opening Asanas - Kapotasana Prep',
    description: 'Gentle hip mobility exercises including Pigeon Pose preparation',
    level: 'BEGINNER',
    category: 'BODY_MOBILITY',
    duration: 20,
    day: 4,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sikkq11aq0bpqel3xbzoz-rPkqSd01OSwzWvsj42ts8UAUd6VV45.jpg?download=1',
    teacherScript: `
Today we focus on opening the hips. Our hips hold a lot of tension and emotion, so be gentle and patient with yourself.

Let's begin with Butterfly Pose - Baddha Konasana. Sit on your mat and bring the soles of your feet together, letting your knees fall out to the sides. Hold your feet with your hands and sit up tall. Gently press your knees down with your elbows. Don't force it - just apply gentle pressure. Breathe into your hips for two full minutes.

Now we'll move into Pigeon Pose preparation - Eka Pada Rajakapotasana. Start on all fours. Bring your right knee forward and place it behind your right wrist. Extend your left leg straight back behind you. Square your hips so they face forward. You can stay upright with your hands on the floor, or if it feels comfortable, fold forward over your front leg. Hold for one minute, breathing into any tightness. Then switch to the other side.

Next is Low Lunge - Anjaneyasana. Step your right foot forward between your hands and lower your left knee to the mat. Sink your hips forward and down. If you'd like, raise your arms overhead. Feel the stretch in your hip flexors. Hold for forty-five seconds, then switch sides.

Now let's try Happy Baby - Ananda Balasana. Lie on your back and grab the outside edges of your feet. Bring your knees wide toward your armpits. You can rock gently from side to side if that feels good. Hold for one minute.

Finally, we'll do a Supine Twist - Supta Matsyendrasana. Still lying on your back, hug your right knee into your chest, then guide it across your body to the left. Extend your right arm out to the side and gaze toward your right hand. Hold for one minute, then switch sides.

Beautiful work opening your hips today!
    `,
    instructions: [
      '🦋 BADDHA KONASANA (Butterfly): Soles of feet together, knees to sides. Press knees down gently. Hold 2 minutes',
      '🕊️ EKA PADA RAJAKAPOTASANA PREP (Pigeon): Right knee forward, left leg back. Stay upright or fold forward. 1 min each side',
      '🦎 ANJANEYASANA (Low Lunge): Front foot between hands, back knee down. Sink hips forward. 45 sec each side',
      '👶 ANANDA BALASANA (Happy Baby): Grab feet edges, knees wide. Rock gently. Hold 1 minute',
      '🌀 SUPTA MATSYENDRASANA (Supine Twist): Knee to chest, guide across body. 1 min each side',
    ],
    benefits: [
      'Releases tension and tightness in hip flexors',
      'Improves flexibility and range of motion in hips',
      'Relieves lower back pain and sciatica',
      'Enhances overall mobility and freedom of movement',
      'Promotes emotional release (hips store stress)',
    ],
    precautions: [
      'Move slowly and gently into hip stretches',
      'Never force hips open - use props under knees if needed',
      'Avoid if you have hip injuries or recent surgery',
      'Keep weight even on both sitting bones',
    ],
  },

  {
    id: 'bg-day5',
    title: 'Core Strength - Navasana & Plank Work',
    description: 'Building core strength with Boat Pose and fundamental stability exercises',
    level: 'BEGINNER',
    category: 'CORE_WORKOUT',
    duration: 20,
    day: 5,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8si63k11am0bpq7d177l5c-SaawZZDXcGuU0THzfVlKPT5lDmOCFc.jpg?download=1',
    teacherScript: `
Today we build a strong core foundation. Your core is the center of all movement, so let's strengthen it together.

Let's start with Plank Pose - Phalakasana. Begin on your hands and knees, then step both feet back so your body forms a straight line from head to heels. Engage your core muscles - pull your navel toward your spine. Don't let your hips sag down or lift up too high. Hold for twenty seconds, then rest. We'll repeat this three times.

Now let's practice Boat Pose - Navasana. Sit on your mat with your knees bent. Lift your feet off the floor and balance on your sitting bones. Extend your arms parallel to the floor. Keep your chest lifted and core engaged. If this feels good, you can straighten your legs. Hold for fifteen seconds, rest, then repeat for three sets total.

Next is Bridge Pose - Setu Bandhasana. Lie on your back with your feet hip-width apart and placed under your knees. Press your feet and arms down firmly and lift your hips up toward the ceiling. Press your chest toward your chin. Hold for thirty seconds. Lower down slowly and rest. Repeat three times.

Now we'll do Dead Bug exercise. Stay on your back with your arms extended up toward the ceiling and your knees bent at ninety degrees. Slowly lower your right arm overhead while extending your left leg, keeping your lower back pressed to the mat. Return to start and switch sides. Do ten repetitions on each side, moving slowly and with control.

Finally, let's practice Cobra Pose - Bhujangasana. Lie on your belly with your hands placed under your shoulders. Press up, lifting your chest off the mat. Keep your elbows slightly bent and your shoulders down away from your ears. Look forward. Hold for thirty seconds, lower down, and repeat three times.

Excellent core work today!
    `,
    instructions: [
      '📏 PHALAKASANA (Plank): Body straight line, core engaged. Hold 20 sec, repeat 3 times',
      '⛵ NAVASANA (Boat): Balance on sitting bones, arms parallel. Hold 15 sec, 3 sets',
      '🌉 SETU BANDHASANA (Bridge): Lift hips, press feet down. Hold 30 sec, 3 times',
      '🪲 DEAD BUG: Lower opposite arm and leg. Maintain neutral spine. 10 reps each side',
      '🐍 BHUJANGASANA (Cobra): Lift chest, shoulders down. Hold 30 sec, 3 times',
    ],
    benefits: [
      'Strengthens deep abdominal muscles and core',
      'Improves posture and spinal alignment',
      'Stabilizes spine and reduces back pain',
      'Builds muscular endurance and stamina',
      'Enhances overall functional strength',
    ],
    precautions: [
      'Keep lower back neutral - don\'t arch excessively',
      'Breathe continuously throughout all exercises',
      'Modify plank on knees if needed',
      'Stop if you feel strain in lower back',
    ],
  },

  {
    id: 'bg-day6',
    title: 'Surya Namaskar - Sun Salutation Flow',
    description: 'Connecting breath and movement through the traditional Sun Salutation sequence',
    level: 'BEGINNER',
    category: 'BASIC_ASANAS',
    duration: 25,
    day: 6,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sj57j11ar0bpq09jjh6sb-j6UX5vGbDetofw4PBIlSzgq9VcKrIC.jpg?download=1',
    teacherScript: `
Today we practice the beautiful Sun Salutation - Surya Namaskar. This flowing sequence links breath with movement, creating a moving meditation.

Let's begin the sequence. Start in Mountain Pose at the front of your mat. Inhale and raise your arms up overhead, looking up toward your hands. Exhale and fold forward, bringing your hands toward the floor. Inhale and lift halfway up, lengthening your spine. Exhale and step or jump back to Plank pose. Lower down with control to Chaturanga. Inhale and press up to Upward Facing Dog, lifting your chest. Exhale and press back to Downward Facing Dog. Hold here for five breaths. Then step or jump your feet forward. Inhale, lift halfway. Exhale, fold forward. Inhale, rise all the way up with your arms overhead. Exhale, hands to heart center. That's one complete round. Let's flow through this sequence slowly and mindfully three times.

Next, let's practice Cat-Cow flow - Marjaryasana-Bitilasana. Come onto your hands and knees. Synchronize your movement with your breath. Inhale as you arch your back and look up. Exhale as you round your spine and tuck your chin. Move slowly and with awareness. Flow through ten repetitions.

Now we'll flow between Plank and Downward Dog. Start in Plank pose. As you exhale, press your hips back to Downward Dog. As you inhale, flow forward to Plank. Continue this flow five times, moving with your breath.

Let's practice a Warrior Vinyasa. Step your right foot forward into Warrior One. As you inhale, open to Warrior Two. As you exhale, return to Warrior One. Flow between these two poses five times with your breath. Then switch to the other side.

Finally, lie down on your back for Savasana - Corpse Pose. Let your legs fall slightly apart and your arms rest by your sides with palms facing up. Close your eyes. Completely relax every muscle in your body. Rest here for three full minutes.

Beautiful flowing practice today!
    `,
    instructions: [
      '☀️ SURYA NAMASKAR A: Tadasana → Arms up → Forward fold → Halfway lift → Plank → Chaturanga → Up Dog → Down Dog. 3 complete rounds',
      '🐱 CAT-COW FLOW: Hands and knees, synchronize with breath. 10 flowing repetitions',
      '📏 PLANK TO DOWN DOG: Flow between plank and downward dog. 5 repetitions with breath',
      '⚔️ WARRIOR VINYASA: Flow between Warrior I and II on same side. 5 flows each side',
      '💤 SAVASANA: Lie on back, completely relax. Rest for 3 minutes',
    ],
    benefits: [
      'Improves coordination between breath and movement',
      'Builds internal heat and energy in the body',
      'Enhances breath awareness and mindfulness',
      'Provides full body workout and conditioning',
      'Promotes cardiovascular health',
    ],
    precautions: [
      'Move at your own pace - speed isn\'t important',
      'Take breaks in Child\'s Pose when needed',
      'Modify by dropping knees in plank/chaturanga',
      'Stay hydrated throughout practice',
    ],
  },

  {
    id: 'bg-day7',
    title: 'Restorative Yoga & Meditation',
    description: 'Rest and reflection with Viparita Karani and restorative practices',
    level: 'BEGINNER',
    category: 'MEDITATION',
    duration: 20,
    day: 7,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sjm1h11av0bpq7lygdp6q-lGGuOtLxzA6JPZIb2zoVb27yZKwygL.jpg?download=1',
    teacherScript: `
Today is your rest and recovery day. We'll practice gentle restorative yoga to allow your body to heal and integrate everything you've learned this week.

Let's begin with Supported Child's Pose. Place a bolster or several pillows between your thighs. Kneel down and rest your torso on the support. Turn your head to one side. Allow your entire body to completely relax. Let gravity do all the work. Rest here for three full minutes. If you'd like, you can turn your head to the other side halfway through.

Now we'll practice Legs Up the Wall - Viparita Karani. Sit sideways next to a wall. As you lower your back to the floor, swing your legs up the wall. Scoot your hips close to the wall. Let your arms relax by your sides with palms facing up. Close your eyes. Feel gravity gently draining all tension from your legs. Rest here for five minutes. This pose is deeply restorative.

Remain on your back and move away from the wall. Extend your legs comfortably. We'll now practice Supine Meditation. Close your eyes and bring your attention to your natural breath. Simply observe the breath moving in and out without trying to change it. Notice the gentle rise and fall of your belly. Continue for five minutes, just watching your breath.

Now we'll do a Body Scan. Starting with your toes, mentally scan each part of your body moving upward - your feet, ankles, calves, knees, thighs, hips, lower back, upper back, shoulders, arms, hands, neck, and finally your face and head. As you bring attention to each area, consciously relax it. Notice any sensations without trying to change them. Complete this scan two to three times.

Finally, let's practice Gratitude. Bring to mind three specific things you're grateful for from this past week of practice. Maybe it's your dedication to showing up each day, or a particular breakthrough in a pose, or simply the time you gave yourself. Feel genuine appreciation in your heart. Rest in this feeling for two minutes.

Wonderful completion of your first week!
    `,
    instructions: [
      '🧘 SUPPORTED BALASANA: Torso on bolster/pillows, head to side. Complete relaxation. 3 minutes',
      '🦵 VIPARITA KARANI (Legs Up Wall): Legs vertical on wall, arms relaxed. Gravity drains tension. 5 minutes',
      '🧘 SUPINE MEDITATION: On back, legs extended. Observe natural breath. 5 minutes',
      '🧘 BODY SCAN: Mentally scan from toes to head, relaxing each part. 2-3 complete scans',
      '🙏 GRATITUDE PRACTICE: Recall three grateful moments from the week. Feel appreciation. 2 minutes',
    ],
    benefits: [
      'Promotes deep physical recovery and healing',
      'Reduces stress hormones and anxiety',
      'Calms and balances nervous system',
      'Improves sleep quality and duration',
      'Cultivates inner peace and contentment',
    ],
    precautions: [
      'Use props (blankets, pillows) for maximum comfort',
      'Stay warm with a blanket or light covering',
      'If legs up wall is uncomfortable, try legs on chair',
      'Set a gentle timer so you can fully relax',
    ],
  },

  // ==========================================
  // WEEK 2: INTERMEDIATE TRANSITION (Days 8-14)
  // ==========================================

  {
    id: 'int-day8',
    title: 'Virabhadrasana III - Power Standing Sequence',
    description: 'Build strength with Warrior III and sustained challenging standing poses',
    level: 'INTERMEDIATE',
    category: 'STRENGTH_YOGA',
    duration: 30,
    day: 8,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sjf7811as0bpq6cts1ai3-YClWbMcBSIwcR6rmuuDbx1cCuv5SYF.jpg?download=1',
    teacherScript: `
Welcome to Week Two! Today we increase the intensity with challenging standing poses that build serious strength and stamina.

Let's begin with Sun Salutation B - Surya Namaskar B. This variation adds Chair Pose and Warrior I to the flow. From standing, bend your knees and sit back into Chair Pose as you raise your arms. Then fold forward and flow through your vinyasa. Step your right foot forward into Warrior I. Flow through another vinyasa, then step your left foot forward into Warrior I on the other side. Complete the sequence back to standing. Move through five complete rounds, building heat in your body with each repetition.

Now we'll practice Warrior Three - Virabhadrasana III. Start standing. Shift your weight onto your left foot. As you hinge forward from your hips, simultaneously lift your right leg behind you until it's parallel to the floor. Your body should form one straight line from fingertips to toes. Extend your arms forward or alongside your body for balance. Keep your standing leg strong and engaged. Hold for forty-five seconds. This takes tremendous focus. Now switch to the other side.

Next is Extended Side Angle - Utthita Parsvakonasana. Step into Warrior Two position on your right side. Now lower your right forearm to your right thigh, or if you can, place your right hand on the floor inside your front foot. Extend your left arm over your ear, creating one long line from your back heel to your fingertips. Stack your shoulders so your chest opens toward the ceiling. Hold for one full minute, breathing steadily. Then switch sides.

Let's practice Revolved Triangle - Parivrtta Trikonasana. From standing, step your feet wide. Keep both legs straight. Twist your torso to bring your left hand to your right foot or shin. Extend your right arm straight up toward the ceiling, twisting from your core. Keep both legs straight and active. Hold for forty-five seconds, then switch sides.

Finally, Chair Pose variations - Utkatasana. Bring your feet together. Bend your knees and sit back as if sitting in a chair. Raise your arms overhead. Hold for thirty seconds. Now twist to your right, bringing your hands to prayer position. Hold for thirty seconds. Return to center, then twist to your left for thirty seconds. This is challenging but you can do it!

Incredible strength work today!
    `,
    instructions: [
      '☀️ SURYA NAMASKAR B: Add Chair and Warrior I to sun salutation. 5 complete rounds, building heat',
      '⚔️ VIRABHADRASANA III (Warrior III): Balance on one leg, other leg parallel to floor. Body straight line. 45 sec each side',
      '📐 UTTHITA PARSVAKONASANA: From Warrior II, forearm to thigh, top arm over ear. 1 minute each side',
      '🔄 PARIVRTTA TRIKONASANA: Opposite hand to front foot, twist from core. 45 sec each side',
      '💺 UTKATASANA VARIATIONS: Chair hold 30 sec, twist right 30 sec, twist left 30 sec',
    ],
    benefits: [
      'Builds significant muscular endurance in legs',
      'Improves balance, coordination, and proprioception',
      'Increases stamina and cardiovascular fitness',
      'Enhances mental focus and determination',
      'Strengthens ankles, knees, and core stability',
    ],
    precautions: [
      'Warm up thoroughly before attempting these poses',
      'Maintain proper knee alignment over ankle',
      'Use wall or chair for balance in Warrior III initially',
      'Rest in Child\'s Pose if you feel fatigued',
    ],
  },

  {
    id: 'int-day9',
    title: 'Vasisthasana - Advanced Core Power',
    description: 'Advanced core strengthening with Side Plank and challenging sequences',
    level: 'INTERMEDIATE',
    category: 'CORE_WORKOUT',
    duration: 25,
    day: 9,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sjhww11au0bpq0zdufdob-pbikNmXgpySUSqk6fArzs4XsILR0Ke.jpg?download=1',
    teacherScript: `
Today is all about core power. We'll challenge your core muscles with side planks and advanced stability work.

Let's begin with Side Plank transitions - Vasisthasana. Start in Plank Pose. Now rotate to your right, stacking your feet or staggering them for stability. Extend your left arm up toward the ceiling. Hold for fifteen seconds. Return to Plank. Now rotate to your left side. Hold for fifteen seconds. Continue transitioning between right side, plank, and left side for ten complete cycles on each side. This builds tremendous core strength and stability.

Now Boat Pose variations - Navasana. Sit and lift into traditional Boat Pose with your legs extended and arms parallel to the floor. Hold for thirty seconds. Now slowly lower your back and legs until they hover just above the mat - this is low boat. Hold for ten seconds. Lift back up to high boat. This is one set. Complete four sets total. Your core should be burning - that's good!

Let's move to Forearm Plank - Dolphin Plank. Lower down to your forearms, keeping your body in one straight line. Don't let your hips sag down or lift up too high. Pull your navel strongly toward your spine. Hold for forty-five seconds. Rest. Repeat three times total.

Now Russian Twists for rotational core strength. Sit with your knees bent and your feet lifted off the floor. Lean back slightly - keep your spine straight. Hold your hands together at your chest. Twist to the right and tap the floor beside you. Twist to the left and tap the other side. That's one repetition. Complete twenty twists, then rest. Do three total sets.

Finally, Hollow Body Hold. Lie on your back. Press your lower back firmly into the mat. Lift your shoulders and legs just a few inches off the floor. Extend your arms overhead. Your body should form a slight banana shape, but keep your lower back pressed down. Hold for thirty seconds. Rest. Repeat three times.

Powerful core work today!
    `,
    instructions: [
      '📏 VASISTHASANA TRANSITIONS: Plank to side plank right, back to plank, side plank left. 10 cycles each side',
      '⛵ NAVASANA VARIATIONS: High boat 30 sec, low boat hover 10 sec. 4 complete sets',
      '💪 FOREARM PLANK: On forearms, body straight, core engaged. 45 sec, repeat 3 times',
      '🔄 RUSSIAN TWISTS: Sit, feet lifted, twist side to side. 20 reps, 3 sets',
      '⚪ HOLLOW BODY: Back on floor, lift shoulders and legs, arms overhead. 30 sec, 3 times',
    ],
    benefits: [
      'Builds deep core strength and stability',
      'Improves lateral stability and balance',
      'Enhances full-body integration and control',
      'Tones abdominals, obliques, and back muscles',
      'Increases mental toughness and endurance',
    ],
    precautions: [
      'Maintain constant core engagement throughout',
      'Avoid if you have wrist, shoulder, or neck issues',
      'Breathe steadily - don\'t hold your breath',
      'Modify on knees if full positions are too challenging',
    ],
  },

  {
    id: 'int-day10',
    title: 'Deep Flexibility & Hamstring Work',
    description: 'Advanced stretching with Uttanasana variations for deeper flexibility',
    level: 'INTERMEDIATE',
    category: 'FLEXIBILITY_FLOW',
    duration: 35,
    day: 10,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sjxow11bb0bpq1v7zfxfp-8VwMAi3d1ngzYkYRaq76eaJTZu3xcr.jpg?download=1',
    teacherScript: `
Today we work on deep flexibility, particularly in the hips and hamstrings. Be patient and breathe into each stretch.

Let's begin with Full Pigeon Pose - Eka Pada Rajakapotasana. From Downward Dog, bring your right knee forward and place it behind your right wrist. Extend your left leg straight back. Square your hips to face forward. If you can, fold forward over your front leg, resting your forehead on your hands or on the mat. Breathe deeply into your right hip. Stay here for three full minutes. This is a deep hip opener, so be patient with yourself. Then switch to the left side for three minutes.

Now we'll practice King Pigeon preparation - Kapotasana prep. From regular Pigeon Pose on your right side, reach your left arm back and grab your left foot. Gently pull your foot toward your glutes. If you can, reach back with your right hand as well to deepen the quad stretch. Hold for two minutes, breathing steadily. Then switch sides.

Next, let's work toward Splits - Hanumanasana prep. Start in a Low Lunge with your right foot forward. Gradually begin to straighten your front leg and slide your back leg further back. Go only as far as is comfortable - this is a very intense stretch. You can use blocks under your hands for support. Never bounce or force your way deeper. Hold for five minutes, exploring small adjustments. Then carefully come out and switch sides.

Now Seated Forward Fold variations - Paschimottanasana. Sit with both legs extended straight in front of you. Fold forward from your hips. Hold for two minutes. Now open your legs wide into a V shape - this is Upavistha Konasana. Fold forward between your legs. Hold two minutes. Finally, bend your right leg and place your right foot against your inner left thigh. Fold over your left leg - this is Janu Sirsasana. Hold two minutes, then switch sides.

Last pose is Reclined Hand-to-Big-Toe - Supta Padangusthasana. Lie on your back. Use a strap around your right foot and extend your right leg up toward the ceiling. Keep your left leg extended on the floor or bent if needed. Hold the strap and breathe into the hamstring stretch for two full minutes. Then switch sides.

Beautiful deep flexibility work today!
    `,
    instructions: [
      '🕊️ EKA PADA RAJAKAPOTASANA: Knee forward, back leg extended, fold forward. 3 minutes each side',
      '👑 KAPOTASANA PREP: From pigeon, reach back to grab back foot. 2 minutes each side',
      '🦵 HANUMANASANA PREP: Straighten front leg, slide back leg back. Use blocks. 5 minutes total',
      '🙇 PASCHIMOTTANASANA VARIATIONS: Legs together, legs wide, one leg bent. 2 minutes each',
      '🦵 SUPTA PADANGUSTHASANA: On back, strap around foot, leg up. 2 minutes each side',
    ],
    benefits: [
      'Significantly increases range of motion',
      'Releases deep-seated tension in hips and legs',
      'Improves overall posture and alignment',
      'Enhances athletic performance and prevents injury',
      'Promotes energy flow through body',
    ],
    precautions: [
      'Never force or bounce in stretches',
      'Always warm up before deep stretching',
      'Use props (blocks, straps, blankets) generously',
      'Breathe deeply - exhale to deepen stretch gently',
    ],
  },

  {
    id: 'exp-day11',
    title: 'Bakasana - Advanced Arm Balances',
    description: 'Master Crow Pose and other challenging arm balance postures',
    level: 'EXPERT',
    category: 'ADVANCED_ASANAS',
    duration: 40,
    day: 11,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8slloh11bf0bpq30cw46b1-cYHJwKHXT3jwI8l8t1EzzB0CL9oyYF.jpg?download=1',
    teacherScript: `
Welcome to advanced arm balance work! Today we'll practice Crow Pose and work toward other challenging arm balances. These poses require strength, focus, and courage.

Let's begin with Crow Pose - Bakasana. Squat down with your feet close together. Place your hands shoulder-width apart on the mat in front of you. Bend your elbows slightly and place your knees on the outside of your upper arms or triceps. Begin to shift your weight forward onto your hands. Look forward, not down. When you're ready, lift one foot off the ground, then the other. Try to bring your feet together. It's okay if you can only lift one foot at first - that's still progress. Make multiple attempts. Each attempt teaches you something.

Now Side Crow - Parsva Bakasana. Squat down and twist deeply to your right. Place both hands on the floor to the right of your feet. Rest your left hip and side ribs on your right elbow. Begin to shift your weight forward and lift your feet off the floor. This requires core strength and balance. Practice several attempts on each side.

Let's work on Firefly Pose preparation - Tittibhasana prep. From a wide squat, thread your right shoulder under your right knee. Then thread your left shoulder under your left knee. Place your hands on the floor behind your feet. Begin to straighten your legs and lift your hips. You're working toward having your legs draped over your shoulders. This is very advanced, so work on the component movements. Make several attempts.

Now Flying Pigeon - Eka Pada Galavasana. Stand on both feet. Cross your right ankle over your left thigh. Squat deeply on your left leg. Place your hands on the floor in front of you. Shift your weight forward onto your hands. Your right knee will come outside your right arm. When balanced, extend your left leg back behind you. Practice the transitions multiple times on each side.

Finally, let's work on Handstand preparation at the wall. Come into Downward Dog facing a wall, with your feet close to the wall. Walk your feet up the wall, one foot at a time. Walk them as high as feels comfortable today. This builds strength and confidence in inversions. Make five attempts at walking higher up the wall.

Courageous work on these challenging poses today!
    `,
    instructions: [
      '🦅 BAKASANA (Crow): Squat, hands down, knees on arms, shift weight forward, lift feet. Multiple attempts',
      '🔄 PARSVA BAKASANA (Side Crow): Twist, both hands down, rest hip on elbow, lift feet. Each side',
      '🪰 TITTIBHASANA PREP (Firefly): Shoulders under knees, hands behind feet, lift hips. Component movements',
      '🕊️ EKA PADA GALAVASANA (Flying Pigeon): Ankle on thigh, squat, hands down, shift forward. Practice transitions',
      '🤸 HANDSTAND PREP: Downward dog at wall, walk feet up wall progressively. 5 attempts',
    ],
    benefits: [
      'Builds tremendous upper body and core strength',
      'Enhances focus, concentration, and mental clarity',
      'Improves balance, coordination, and body awareness',
      'Boosts confidence and overcomes fear',
      'Strengthens wrists, arms, and shoulders',
    ],
    precautions: [
      'Place padding (folded blanket) under head/hands',
      'Practice on soft surface or with spotter initially',
      'Warm up wrists thoroughly before attempting',
      'Don\'t practice if you have wrist or shoulder injuries',
    ],
  },

  {
    id: 'exp-day12',
    title: 'Vinyasa Power Flow - Intense Sequence',
    description: 'Intense dynamic vinyasa sequence for endurance and total body strength',
    level: 'EXPERT',
    category: 'POWER_YOGA',
    duration: 50,
    day: 12,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8skstf11bd0bpq8vxf9r0r-ve2njXvI8p838Me2EigoVW4wwdAnbL.jpg?download=1',
    teacherScript: `
Today is an intense power yoga session. This practice will test your strength, stamina, and mental endurance. Stay focused and breathe.

We'll begin with Dynamic Sun Salutations at a challenging pace. Flow through ten complete rounds of Sun Salutation A and B combined. Move quickly but maintain good form and breath connection. Your breath should remain steady even as your heart rate increases. This will build serious heat in your body. Begin now, and keep moving for the next fifteen minutes.

Now for our Standing Strength Sequence lasting ten minutes. First, Warrior Three - hold for one full minute on the right side, then one minute on the left. Without rest, move into Chair Pose - hold for one full minute. Next, Extended Side Angle on the right for one minute, then left for one minute. Now Revolved Triangle on the right for one minute, then left for one minute. Flow between these poses without stopping. Your legs will shake - that's normal. Push through.

Next is Core Integration Flows for ten minutes of continuous core work. Begin with Plank Pose, hold one minute. Side Plank right, hold one minute. Plank center, hold one minute. Side Plank left, hold one minute. Now Boat Pose, hold one minute. Hollow Body rocks for one minute. Forearm Plank, hold one minute. Take a brief thirty-second rest, then repeat this entire sequence one more time. Keep breathing!

Balance Challenge time for ten minutes. Stand and find your Tree Pose on the right. Hold for one minute. Flow into Eagle Pose on the right, hold one minute. Now Warrior Three on the right, one minute. Half Moon on the right, one minute. Finally, Dancer's Pose on the right, one minute. Now switch to your left side and repeat all five poses, one minute each. Test your focus and stability while fatigued.

Finally, an Intense Backbend Sequence for five minutes. Start with Bridge Pose, hold one minute. If you know Wheel Pose - Urdhva Dhanurasana - practice three repetitions, holding each for thirty seconds. Otherwise, stay with Bridge. Next, Camel Pose - Ustrasana - hold one minute. Finally, Bow Pose - Dhanurasana - hold one minute.

Incredible work! You've completed one of the most challenging yoga sessions possible!
    `,
    instructions: [
      '☀️ DYNAMIC SURYA NAMASKAR: 10 rounds Sun Sal A and B. Fast pace, maintain form and breath. 15 minutes',
      '⚔️ STANDING STRENGTH: Warrior III (1 min) → Chair (1 min) → Extended Side Angle (1 min) → Revolved Triangle (1 min) each side. 10 minutes',
      '💪 CORE INTEGRATION: Plank, side planks, boat, hollow rocks, forearm plank. Continuous 10 minutes',
      '🦅 BALANCE CHALLENGES: Tree → Eagle → Warrior III → Half Moon → Dancer. 1 min each, both sides. 10 minutes',
      '🌈 BACKBEND SEQUENCE: Bridge/Wheel → Camel → Bow. Multiple rounds. 5 minutes',
    ],
    benefits: [
      'Maximizes calorie burn and metabolism',
      'Builds total body strength and muscle tone',
      'Increases cardiovascular fitness significantly',
      'Develops mental toughness and resilience',
      'Improves stamina and athletic performance',
    ],
    precautions: [
      'Ensure thorough 10-minute warm-up before starting',
      'Stay well hydrated throughout practice',
      'Listen to your body - modify if needed',
      'Practice on empty stomach (2-3 hours after eating)',
    ],
  },

  {
    id: 'exp-day13',
    title: 'Advanced Pranayama - Kapalabhati & Bandhas',
    description: 'Deep breathing techniques including Skull Shining Breath and energy locks',
    level: 'EXPERT',
    category: 'PRANAYAMA',
    duration: 45,
    day: 13,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8skq3j11bc0bpqhsldc4lx-trjNRspVX0jHsIfyyi6e8HrKdf3DHF.jpg?download=1',
    teacherScript: `
Today we practice advanced pranayama techniques. These powerful breathing exercises purify the body and sharpen the mind. Approach with respect and patience.

We'll begin with Kapalabhati - Skull Shining Breath. Sit comfortably with your spine erect. Take a deep breath in. Now, forcefully exhale through your nose by contracting your abdominal muscles. The inhale will happen passively - don't focus on it. Start slowly to learn the technique - one exhale per second. Once you have the rhythm, you can increase the speed slightly. We'll do three rounds of one hundred eight breaths each. After each round, rest completely and breathe naturally for at least one minute.

Next is Bhastrika - Bellows Breath. This is similar to Kapalabhati, but now both the inhale and exhale are forceful. Breathe forcefully in and out through your nose, like pumping bellows. This is very energizing and heating for the body. Do three rounds of thirty breaths each. Rest completely for one minute between rounds. If you feel dizzy, stop and return to normal breathing.

Now we practice Kumbhaka - Breath Retention. Take a deep, comfortable inhale. Hold your breath for as long as is comfortable - start with five seconds. Don't strain. Exhale slowly. Breathe normally for a few breaths, then repeat. Gradually over time, you can increase the length of retention. After practicing holding after inhale, we'll also practice holding after exhale. Exhale completely, hold the breath out for five seconds, then inhale. Build your capacity slowly over weeks and months.

Now let's practice the Bandhas - Energy Locks. First, Mula Bandha - the root lock. Gently contract your pelvic floor muscles as if you're stopping the flow of urination. Hold this subtle engagement. Second, Uddiyana Bandha - the abdominal lock. After a full exhale, pull your abdomen in and up strongly under your ribcage. This is done on the exhale with breath held out. Third, Jalandhara Bandha - the throat lock. Lower your chin toward your chest, lengthening the back of your neck. Practice each bandha individually first, then work on combining them.

Finally, Deep Meditation - Dhyana. After all this pranayama, your mind will be clear and energized. Sit in complete stillness. Focus your attention on the space between your eyebrows - the third eye center. If thoughts arise, simply observe them without attachment and return your focus to the third eye. Sit in deep meditation for fifteen minutes.

Powerful pranayama practice today!
    `,
    instructions: [
      '💨 KAPALABHATI (Skull Shining): Forceful exhales, passive inhales. 3 rounds of 108 breaths. Rest between',
      '🔥 BHASTRIKA (Bellows): Forceful inhales AND exhales. 3 rounds of 30 breaths. Rest between',
      '🫁 KUMBHAKA (Breath Retention): Hold after inhale, hold after exhale. Start 5 sec, build gradually',
      '🔒 BANDHA PRACTICE: Mula (root), Uddiyana (abdominal), Jalandhara (throat). Individual then combined',
      '🧘 DEEP DHYANA: Stillness, focus on third eye. Deep meditation. 15 minutes',
    ],
    benefits: [
      'Purifies nadis (energy channels) in the body',
      'Increases mental clarity and consciousness',
      'Enhances deep concentration and meditation',
      'Boosts prana (life force energy) levels',
      'Detoxifies and cleanses respiratory system',
    ],
    precautions: [
      'Practice on completely empty stomach (3-4 hours)',
      'Consult experienced teacher before attempting',
      'Not suitable for pregnant women',
      'Avoid if you have high blood pressure or heart issues',
    ],
  },

  {
    id: 'exp-day14',
    title: 'Ultimate Endurance Challenge',
    description: 'Full body endurance test and stamina building with extended holds',
    level: 'EXPERT',
    category: 'ENDURANCE',
    duration: 50,
    day: 14,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sllor11bg0bpq6w5vawvk-G5isQ4Oz6ns4fC8JteZMrgar42PNTr.jpg?download=1',
    teacherScript: `
Today is your ultimate endurance challenge - the culmination of two weeks of dedicated practice. This will test everything you've built: strength, flexibility, stamina, and mental determination.

We begin with twenty minutes of Continuous Vinyasa Flow. For the next twenty minutes, you will not stop moving. Flow continuously through all the poses you've learned over the past two weeks. Link each pose with breath. Move from Sun Salutations to Warriors to Standing poses to Arm balances to Forward folds and back again. Create a flowing dance. Don't stop for the full twenty minutes. This is your primary endurance test. Keep your breath steady and your mind focused. Begin now.

Excellent work. Now for Challenging Pose Holds lasting ten minutes. Select five of your most challenging poses. Perhaps Warrior Three, Chair Pose, Crow Pose, Side Plank, and Forearm Plank. You will hold EACH of these five poses for two full minutes. Not thirty seconds or one minute - two complete minutes. This tests both your physical and mental stamina. Your muscles will shake, your breath may become ragged, but stay present. You can do this. Begin your first pose now.

Now Strength Circuits - three complete rounds lasting nine minutes total. Round One: Twenty Chaturanga pushups, then hold Plank Pose for one minute, then Boat Pose for thirty seconds. Immediately into Round Two: Fifteen Chair Pose squats, then Wall Sit for one minute, then Side Plank on each side for thirty seconds. Immediately into Round Three: Ten attempts at Crow Pose, then Warrior Three hold for one minute, then Hollow Body hold for thirty seconds. Keep moving through all three rounds with minimal rest.

Balance Endurance for six minutes. Now we test your balance while you're fatigued. Tree Pose - hold for two full minutes on your right side. Without coming down, flow into the left side for two minutes. Next, Warrior Three - hold for one full minute on the right, then one minute on the left. Sustained focus and stability under fatigue. You're almost finished!

Finally, a thorough Cool Down and Deep Stretch. You've earned this. Move through gentle forward folds, hip openers like Pigeon and Happy Baby, some gentle twists, and finish with a well-deserved Savasana. Rest here for five full minutes. You've completed an incredible challenge today.

You should be incredibly proud of what you've accomplished today!
    `,
    instructions: [
      '🌊 CONTINUOUS VINYASA: Non-stop flowing sequence, all poses learned. Full 20 minutes no stopping',
      '💪 CHALLENGING HOLDS: 5 hardest poses, hold EACH for 2 full minutes. 10 minutes total',
      '🔥 STRENGTH CIRCUITS (3 rounds): R1: 20 Chaturangas + 1 min Plank + 30s Boat. R2: 15 Chair squats + 1 min Wall sit + 30s Side planks. R3: 10 Crow attempts + 1 min Warrior III + 30s Hollow',
      '🦅 BALANCE ENDURANCE: Tree 2 min each side, Warrior III 1 min each side. 6 minutes',
      '❄️ COOL DOWN: Forward folds, hip openers, twists, 5-minute Savasana',
    ],
    benefits: [
      'Builds exceptional stamina and endurance',
      'Increases mental resilience and willpower',
      'Improves cardiovascular health significantly',
      'Enhances overall fitness and performance',
      'Proves to yourself what you\'re capable of achieving',
    ],
    precautions: [
      'Listen carefully to your body throughout',
      'Modify poses or take brief rests if absolutely needed',
      'Stay hydrated before, during, and after',
      'This is your graduation practice - give it your all!',
    ],
  },

  // ==========================================
  // WEEK 3: INTERMEDIATE MASTERY (Days 15-21)
  // ==========================================

  {
    id: 'int-day15',
    title: 'Sirsasana Prep - Headstand Foundations',
    description: 'Building strength and technique for headstand with safe progressions',
    level: 'INTERMEDIATE',
    category: 'ADVANCED_ASANAS',
    duration: 30,
    day: 15,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sxc5z11d50bpq50w54xsd-2H9yRFEcr39atvA68lT0IJaCpFjVY6.jpg?download=1',
    teacherScript: `
Today we begin working toward headstand - Sirsasana, the king of asanas. We'll build the foundation safely and mindfully.

Let's start by warming up your neck. Sit comfortably and gently tilt your head to the right, then left. Roll your head forward, drawing circles with your nose. Do ten circles in each direction. Never force - keep movements smooth and controlled.

Now we'll practice Dolphin Pose to build shoulder strength. Come onto your forearms and knees. Interlace your fingers and tuck your toes. Lift your hips up and back, creating an inverted V shape like Downward Dog, but on your forearms. Press your forearms firmly into the mat and lift your shoulders away from the floor. Walk your feet closer to your elbows if you can. Hold for one full minute. Rest in Child's Pose. Repeat three times.

Next, Headstand Preparation at the wall. Kneel facing a wall about a foot away. Place your forearms on the mat and interlace your fingers, creating a triangle base. Place the crown of your head on the mat with the back of your head cradled by your hands. Tuck your toes and lift your hips, walking your feet closer to your elbows. When your hips are over your shoulders, try lifting one foot off the ground, then the other. Don't try to fully extend yet - just get comfortable being partially inverted. Practice this for ten minutes, resting when needed.

Now Core Strengthening for headstand. Come to your back. Lift your legs up to ninety degrees. Lower them slowly until they hover six inches above the floor. Hold for ten seconds, then lift back up. Repeat ten times. This builds the core control you need for inversions.

Let's practice Shoulder Stands - Salamba Sarvangasana. Lie on your back. Lift your legs and hips up, supporting your lower back with your hands. Try to bring your torso as vertical as possible. If your neck feels strained, place a folded blanket under your shoulders. Hold for two minutes, breathing steadily.

Finally, rest in Child's Pose with your head supported on a block or folded blanket. Let your neck completely relax for three minutes.

Good foundational work toward inversions today!
    `,
    instructions: [
      '💆 NECK WARM-UP: Gentle tilts, head rolls. 10 circles each direction. Never force',
      '🐬 DOLPHIN POSE: Forearms down, hips up, strong shoulders. 1 min, repeat 3 times',
      '🤸 HEADSTAND PREP AT WALL: Crown on mat, walk feet in, lift one foot. 10 minutes practice',
      '💪 CORE FOR INVERSIONS: Legs to 90°, lower to hover, lift back up. 10 reps',
      '🧘 SHOULDER STANDS: Support lower back, vertical torso. 2 minutes hold',
      '😌 CHILD POSE REST: Head on block, neck relaxed. 3 minutes',
    ],
    benefits: [
      'Builds shoulder and core strength for inversions',
      'Improves circulation to brain and upper body',
      'Develops body awareness and spatial orientation',
      'Calms nervous system through gentle inversion',
      'Prepares safely for advanced inverted poses',
    ],
    precautions: [
      'Never practice if you have neck or spine injuries',
      'Use plenty of padding under head and shoulders',
      'Come out immediately if you feel neck strain',
      'Always practice near a wall when learning',
    ],
  },

  {
    id: 'int-day16',
    title: 'Heart-Opening Backbends',
    description: 'Deep chest and spine opening through progressive backbend practice',
    level: 'INTERMEDIATE',
    category: 'FLEXIBILITY_FLOW',
    duration: 30,
    day: 16,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8syi4211da0bpq5vztdyuu-qQ1Z2SxhQPHu2O2dsqlQAQufnVGyhC.jpg?download=1',
    teacherScript: `
Today we open the heart through backbends. These poses are not just physical - they help release emotional holding patterns and build courage.

Let's warm up the spine with Cat-Cow. On hands and knees, flow between cat and cow poses twenty times, moving slowly and with full breath. Feel your entire spine articulating.

Now Sphinx Pose - Salamba Bhujangasana. Lie on your belly with your forearms on the mat, elbows under shoulders. Press your forearms down and lift your chest, keeping your shoulders relaxed. Hold for two minutes, breathing into your chest.

Progress to Cobra Pose - Bhujangasana. Hands under shoulders, press up lifting your chest higher. Keep a bend in your elbows and shoulders down. Look forward or slightly up. Hold for one minute. Lower down. Repeat three times, going slightly higher each time.

Now Locust Pose - Salabhasana. Lie face down with arms by your sides. On an inhale, simultaneously lift your chest, arms, and legs off the mat. Reach back through your toes and forward through your crown. Hold for thirty seconds. Rest. Repeat four times.

Let's move to Bow Pose - Dhanurasana. Lying face down, bend your knees and reach back to grab your ankles. On an inhale, kick your feet into your hands and lift your chest and thighs off the mat. You're creating a bow shape. Hold for thirty seconds. Release and rest. Repeat three times.

Now Bridge Pose - Setu Bandhasana. Lie on your back, feet hip-width under your knees. Press your feet down and lift your hips high. Interlace your hands under your back and walk your shoulders closer together. Hold for one full minute. Lower down slowly. Repeat three times.

Camel Pose - Ustrasana. Kneel with your knees hip-width apart. Place your hands on your lower back for support. Begin to arch back, lifting your chest toward the ceiling. If you can, reach one hand back to your heel, then the other. Keep your hips pressing forward over your knees. Hold for forty-five seconds. Come up slowly. Repeat twice.

Finish with Child's Pose, resting for three minutes to neutralize your spine.

Beautiful heart-opening work today!
    `,
    instructions: [
      '🐱 CAT-COW WARM-UP: Flow 20 times slowly, full spinal articulation',
      '🦁 SPHINX POSE: Forearms down, chest lifted. 2 minutes',
      '🐍 COBRA POSE: Hands under shoulders, lift chest higher. 1 min, repeat 3 times',
      '🦗 LOCUST POSE: Lift chest, arms, and legs simultaneously. 30 sec, repeat 4 times',
      '🏹 BOW POSE: Grab ankles, kick feet to lift. 30 sec, repeat 3 times',
      '🌉 BRIDGE POSE: Hips high, shoulders together. 1 minute, repeat 3 times',
      '🐫 CAMEL POSE: Kneel, arch back, reach for heels. 45 sec, repeat twice',
    ],
    benefits: [
      'Opens chest, shoulders, and entire front body',
      'Strengthens back muscles and spine',
      'Improves posture and counteracts slouching',
      'Energizes body and lifts mood',
      'Releases emotional holding in chest area',
    ],
    precautions: [
      'Warm up thoroughly before deep backbends',
      'Never force or crank into backbends',
      'Engage core to protect lower back',
      'Counter with forward folds and twists after',
    ],
  },

  {
    id: 'int-day17',
    title: 'Standing Splits & Balance Flow',
    description: 'Challenging balance work with standing split variations and sustained holds',
    level: 'INTERMEDIATE',
    category: 'BALANCE_TRAINING',
    duration: 30,
    day: 17,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sx9v811d40bpq1mipau27-7DIEirXMR2l0SdxKTuyZQV5TKeAi24.jpg?download=1',
    teacherScript: `
Today we work on advanced balance poses, particularly standing splits. These poses require flexibility, strength, and unwavering focus.

Begin with Tree Pose - Vrksasana - to center yourself. Stand on your right leg, place your left foot on your inner right thigh. Hands to heart center. Close your eyes and find your balance. Hold for two minutes. Switch sides.

Now Half Moon Pose - Ardha Chandrasana. From Triangle Pose on the right side, bend your right knee and place your right hand on the floor about a foot in front of your right foot. As you straighten your right leg, lift your left leg to hip height. Stack your hips and open your chest to the left. Extend your left arm up. Hold for one minute. Switch sides.

Let's work on Standing Splits - Urdhva Prasarita Eka Padasana. From standing, fold forward and plant both hands on the floor. Shift your weight onto your right foot. Begin to lift your left leg up behind you as high as it will go comfortably. Keep your standing leg straight and strong. You can hold your standing ankle with both hands for support. Let gravity gently pull your torso closer to your standing leg. Hold for two minutes. Feel the hamstring stretch. Switch sides carefully.

Now Standing Split variations. From standing splits on the right leg, try bending your standing knee to deepen the stretch. Hold one minute. Straighten your standing leg again. Now try reaching your right hand up toward your lifted left foot. Hold one minute. These variations build strength and flexibility simultaneously. Repeat on the other side.

Dancer's Pose - Natarajasana. Stand on your right leg. Bend your left knee and grab your left foot with your left hand behind you. Begin to kick your foot into your hand while hinging forward from your hips. Extend your right arm forward for balance. Create a beautiful arcing shape with your body. Hold for one minute. Switch sides.

Eagle Pose - Garudasana. Standing, wrap your left leg around your right leg. Wrap your right arm under and around your left arm, bringing palms to touch. Sink into a mini squat and lift your elbows to shoulder height. Hold for one minute. Unwrap carefully and switch sides.

Finish with wide-legged standing forward fold - Prasarita Padottanasana - for three minutes. Let your head hang heavy and your hamstrings release.

Excellent balance work today!
    `,
    instructions: [
      '🌳 TREE POSE: Eyes closed, find balance. 2 minutes each side',
      '🌙 HALF MOON: From triangle, lift back leg to hip height. 1 minute each side',
      '🦵 STANDING SPLITS: Forward fold, lift one leg high. Hold ankle. 2 minutes each side',
      '🦵 SPLIT VARIATIONS: Bend standing knee, reach for lifted foot. 1 min each variation, both sides',
      '💃 DANCER POSE: Grab foot behind, kick into hand, hinge forward. 1 minute each side',
      '🦅 EAGLE POSE: Wrap arms and legs, mini squat. 1 minute each side',
      '🙇 WIDE-LEGGED FORWARD FOLD: Head heavy, hamstrings release. 3 minutes',
    ],
    benefits: [
      'Improves balance and proprioception significantly',
      'Increases hamstring and hip flexibility',
      'Strengthens standing leg and ankle stability',
      'Enhances focus and mental concentration',
      'Builds confidence in challenging positions',
    ],
    precautions: [
      'Use wall for support when learning these poses',
      'Never lock the knee of your standing leg',
      'Come out slowly if you lose balance',
      'Warm up hips and hamstrings thoroughly first',
    ],
  },

  {
    id: 'int-day18',
    title: 'Twisting Sequences - Detox & Digestion',
    description: 'Deep twisting poses for spinal health and internal organ massage',
    level: 'INTERMEDIATE',
    category: 'FLEXIBILITY_FLOW',
    duration: 30,
    day: 18,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sxhe511d60bpqfkck35gt-m11OaOW1ttwztSa3wq5T6XNV1X1781.jpg?download=1',
    teacherScript: `
Today we practice deep twisting poses. Twists wring out the spine like a towel, massage internal organs, and are incredibly detoxifying for the body.

Begin seated with legs extended. We'll start with a simple Seated Spinal Twist - Ardha Matsyendrasana. Bend your right knee and place your right foot on the outside of your left knee. Sit up very tall. Hug your right knee with your left arm, or hook your left elbow outside your right knee. Place your right hand on the floor behind you. Inhale to lengthen your spine, exhale to twist deeper to the right. Hold for two minutes, breathing steadily. Each exhale, twist slightly deeper. Switch sides.

Now Revolved Triangle - Parivrtta Trikonasana. Stand with feet wide. Turn your right foot out ninety degrees and your left foot in forty-five degrees. Square your hips to face your right foot. Twist your torso to bring your left hand to the floor on the inside or outside of your right foot. Extend your right arm straight up. Keep both legs completely straight. Hold for one minute. Switch sides.

Let's do Revolved Side Angle - Parivrtta Parsvakonasana. From Warrior Two position on the right side, bring your hands to prayer at your heart. Twist to the right and hook your left elbow outside your right knee. Press your palms together strongly to deepen the twist. Hold one minute. Switch sides.

Now Supine Spinal Twist - Supta Matsyendrasana. Lie on your back. Hug your knees into your chest. Let both knees fall to your right side. Extend your arms out to the sides at shoulder height. Turn your head to look left. Relax completely and let gravity pull your knees toward the floor. Hold for three full minutes. Switch sides.

Thread the Needle Twist. Come onto hands and knees. Reach your right arm under your body and thread it through to the left. Rest your right shoulder and ear on the mat. You can keep your left hand on the floor or reach it up toward the ceiling to deepen the twist. Hold two minutes. Switch sides.

Seated Twist with Bind. Sit with your right leg extended and your left foot crossed over to the outside of your right knee. Twist to the left. Reach your right arm around your left thigh. Reach your left arm behind your back and try to clasp your hands together in a bind. Sit tall and breathe into the twist for two minutes. Switch sides.

Finish in Child's Pose for two minutes to neutralize your spine.

Wonderful detoxifying practice today!
    `,
    instructions: [
      '🪢 ARDHA MATSYENDRASANA (Seated Twist): Sit tall, knee bent, elbow outside knee. 2 minutes each side',
      '🔄 PARIVRTTA TRIKONASANA (Revolved Triangle): Feet wide, opposite hand to foot. 1 minute each side',
      '⚡ PARIVRTTA PARSVAKONASANA (Revolved Side Angle): From Warrior II, twist, elbow outside knee. 1 min each',
      '🌀 SUPTA MATSYENDRASANA (Supine Twist): Knees to side, arms out, head opposite. 3 min each side',
      '🧵 THREAD THE NEEDLE: On all fours, thread arm under, rest shoulder down. 2 min each side',
      '🎀 SEATED TWIST WITH BIND: Knee bent, twist, reach for bind. 2 minutes each side',
    ],
    benefits: [
      'Wrings out and lengthens the entire spine',
      'Massages internal organs, aids digestion',
      'Detoxifies and cleanses the body',
      'Relieves back pain and tension',
      'Improves spinal rotation and mobility',
    ],
    precautions: [
      'Always lengthen spine before twisting',
      'Twist from the core, not just shoulders',
      'Avoid deep twists if pregnant',
      'Move slowly and never force twists',
    ],
  },

  {
    id: 'int-day19',
    title: 'Core & Hip Integration Flow',
    description: 'Combining core strength with hip mobility in dynamic sequences',
    level: 'INTERMEDIATE',
    category: 'CORE_WORKOUT',
    duration: 30,
    day: 19,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8syi2a11d90bpqeq409h71-S0DKSvdqSUJMchkUX7mf8iLa5s92Wt.jpg?download=1',
    teacherScript: `
Today we integrate core strength with hip mobility. This combination builds functional strength and flexibility together.

Let's begin with Boat to Low Boat flows. Sit and lift into Boat Pose - Navasana. Hold for ten seconds. Now lower your back and legs to hover just above the mat - low boat. Hold ten seconds. Lift back to high boat. Continue flowing between high and low boat ten times. Rest for one minute. Repeat two more sets.

Now Pigeon to Plank transitions. Start in Pigeon Pose on the right side. Hold for thirty seconds, breathing into your hip. Now plant your hands and step back to Plank Pose. Hold plank for thirty seconds, core engaged. Step forward back into Pigeon Pose. This is one flow. Do five complete flows on the right side, then switch to the left for five flows.

Let's practice Side Plank with leg lift - Vasisthasana variation. Come into Side Plank on your right arm. Once stable, lift your left leg up toward the ceiling. Try to grab your left big toe with your left hand if you can. Hold for thirty seconds. Return to Plank, switch sides. Do three rounds on each side.

Now Forearm Plank to Dolphin Pose flows. Start in Forearm Plank. Press your hips up and back into Dolphin Pose. Flow forward to Forearm Plank. Continue this flow ten times, moving with your breath. Your core and shoulders should be working hard.

Let's do Lizard Pose - Utthan Pristhasana - with pulses. Step your right foot outside your right hand in a low lunge. Lower down onto your forearms if possible. Hold here for one minute. Now pulse your hips gently up and down ten times. Hold low again for one more minute. Switch sides.

Crow Pose to Chaturanga flows. From a squat, lift into Crow Pose. Hold for five seconds. Lower your feet to the floor and flow back to Chaturanga pushup position. That's one flow. Do five repetitions, building arm and core strength.

Finish with Happy Baby Pose - Ananda Balasana - rocking gently for two minutes. Let your hips completely release.

Excellent integration work today!
    `,
    instructions: [
      '⛵ BOAT TO LOW BOAT: High boat 10 sec, low boat hover 10 sec. 10 flows, 3 sets',
      '🕊️ PIGEON TO PLANK: Pigeon 30 sec, plank 30 sec. 5 flows each side',
      '📏 SIDE PLANK WITH LEG LIFT: Balance, lift top leg, grab toe if possible. 30 sec, 3 rounds each side',
      '💪 FOREARM PLANK TO DOLPHIN: Flow between forearm plank and dolphin. 10 times',
      '🦎 LIZARD POSE WITH PULSES: Forearms down, hold 1 min, pulse 10 times, hold 1 min. Each side',
      '🦅 CROW TO CHATURANGA: Lift to crow, lower to chaturanga. 5 flows',
      '👶 HAPPY BABY: Rock gently, hips released. 2 minutes',
    ],
    benefits: [
      'Builds functional core strength',
      'Increases hip mobility and range of motion',
      'Improves coordination between strength and flexibility',
      'Enhances full-body integration',
      'Develops control in dynamic movements',
    ],
    precautions: [
      'Move with control, not momentum',
      'Keep core constantly engaged',
      'Breathe steadily throughout',
      'Rest when needed between sets',
    ],
  },

  {
    id: 'int-day20',
    title: 'Slow Flow Vinyasa - Mindful Movement',
    description: 'Meditative slow-paced vinyasa flow emphasizing breath and presence',
    level: 'INTERMEDIATE',
    category: 'MEDITATION',
    duration: 35,
    day: 20,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sy9j411d80bpq26eghydd-c40SpyKx2o3x3iw00RLlmkKYdgLMrh.jpg?download=1',
    teacherScript: `
Today we slow everything down. This is a meditative practice where we move very slowly and mindfully, making each transition conscious and deliberate.

Let's begin standing in Mountain Pose. Close your eyes. For the next two minutes, simply stand and breathe. Notice your feet on the ground. Feel your breath moving in your body. Become completely present.

Now we'll flow through one Sun Salutation taking three full minutes. Move as slowly as possible. Inhale, reach arms up - take ten seconds. Exhale, fold forward - take ten seconds. Inhale, halfway lift - ten seconds. Exhale, step back to Plank - ten seconds. Lower to Chaturanga - ten seconds. Inhale to Upward Dog - ten seconds. Exhale to Downward Dog - hold here for one full minute, taking about ten breaths. Step or jump forward - ten seconds. Inhale, halfway lift - ten seconds. Exhale, fold - ten seconds. Inhale, rise up - ten seconds. Exhale, hands to heart. Feel every sensation. Flow through three more rounds, each taking three full minutes.

Now Warrior One to Warrior Two to Extended Side Angle flow on the right side. Each pose will be held for one full minute, and the transition between poses will take thirty seconds. Move with extreme slowness and awareness. Feel every muscle engaging and releasing. Complete this sequence, then switch to the left side.

Let's practice Slow Pyramid Pose - Parsvottanasana. Step your right foot back about three feet. Square your hips forward. Very slowly fold forward over your front leg, taking one full minute to fold down. Hold at the bottom for two minutes. Then take one full minute to slowly rise back up. Switch sides.

Now Reclined Figure Four Stretch. Lie on your back. Cross your right ankle over your left thigh. Thread your hands through and gently draw your left knee toward your chest. Hold for three minutes. Feel the hip opening gradually. Switch sides.

Finally, Meditation in Savasana. Lie on your back completely still. For the next ten minutes, practice body scanning. Start at your toes and very slowly move your awareness up through every part of your body. When you reach your crown, start again at your toes. Move your awareness very, very slowly.

Beautiful meditative practice today!
    `,
    instructions: [
      '🏔️ STANDING MEDITATION: Mountain Pose, eyes closed, breathe. 2 minutes',
      '☀️ SLOW SUN SALUTATION: Each movement takes 10 seconds. One round takes 3 full minutes. Do 4 rounds',
      '⚔️ WARRIOR FLOW: Warrior I (1 min) → Warrior II (1 min) → Extended Side Angle (1 min). 30-sec transitions. Both sides',
      '📐 SLOW PYRAMID: Take 1 minute to fold, hold 2 min, take 1 minute to rise. Each side',
      '🔄 RECLINED FIGURE FOUR: Ankle on thigh, draw knee in. 3 minutes each side',
      '🧘 MEDITATION SAVASANA: Body scan, move awareness slowly. 10 minutes',
    ],
    benefits: [
      'Develops deep mindfulness and present-moment awareness',
      'Allows time to feel subtle sensations in body',
      'Calms nervous system profoundly',
      'Improves proprioception and body awareness',
      'Cultivates patience and mental stillness',
    ],
    precautions: [
      'This practice requires mental discipline - stay focused',
      'Move even slower than you think you should',
      'Resist urge to rush through transitions',
      'If mind wanders, gently return to breath and sensation',
    ],
  },

  {
    id: 'int-day21',
    title: 'Recovery & Yin Yoga - Deep Release',
    description: 'Passive long-hold stretches targeting connective tissue and deep relaxation',
    level: 'INTERMEDIATE',
    category: 'MEDITATION',
    duration: 40,
    day: 21,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8szu2011df0bpqbkyo7vx3-76G6lgQBXjyZcaoYBKWjoXOYB4YGjn.jpg?download=1',
    teacherScript: `
Today is Yin Yoga - a restorative practice where we hold passive stretches for three to five minutes each. This targets the deep connective tissue and promotes profound relaxation and recovery.

In Yin Yoga, we find our edge - the place where we feel sensation but not pain - and then we stay completely still. Relax your muscles and let gravity do the work. Breathe slowly and naturally. Let's begin.

First pose: Butterfly - Baddha Konasana. Sit and bring the soles of your feet together. Let your knees fall open. Fold forward gently, resting your forearms on the floor or on blocks. Find a comfortable position where you feel sensation in your hips and inner thighs. Now stay completely still for five full minutes. Close your eyes. Breathe. Let your body slowly open.

Slowly come up. Pause and notice how you feel. Next pose: Dragon - Anjaneyasana. Step your right foot forward into a low lunge. Lower your back knee to the mat. Sink your hips forward and down. Find your edge. You can stay upright, or fold forward over your front leg. Hold completely still for four minutes. Then switch to the left side for four minutes.

Come to seated. Next is Caterpillar - Paschimottanasana. Extend both legs straight in front of you. Fold forward, letting your spine round. It's okay to bend your knees. Rest your head on your knees or on a bolster. Completely relax here for five full minutes. Allow gravity to gently pull you deeper. Don't actively stretch - just passively surrender.

Now Reclined Twist. Lie on your back. Hug your right knee to your chest, then guide it across your body to the left. Extend your right arm out to the side. Stay here for four minutes. Let your body weight sink into the floor. Switch sides for four minutes.

Next is Sleeping Swan - Pigeon Pose. Come into Pigeon Pose on the right side. Fold all the way forward, resting your forehead on your hands or on a block. Let your entire body weight release downward. Stay here for five full minutes. This is one of the deepest hip openers. Then switch to the left side for five minutes.

Finally, Savasana with Legs Elevated. Lie on your back with a bolster or folded blankets under your knees so your legs are slightly elevated and completely supported. Cover yourself with a blanket. Set a gentle alarm for ten minutes. Close your eyes and enter deep rest.

Complete recovery today. You've earned it!
    `,
    instructions: [
      '🦋 BUTTERFLY YIN: Feet together, fold forward, relax. Hold 5 minutes',
      '🐉 DRAGON: Low lunge, sink hips. Hold 4 minutes each side',
      '🐛 CATERPILLAR: Seated forward fold, spine rounds, relax. 5 minutes',
      '🌀 RECLINED TWIST: Knee across body, arm extended. 4 minutes each side',
      '🦢 SLEEPING SWAN: Pigeon fold forward completely. 5 minutes each side',
      '💤 SAVASANA ELEVATED LEGS: Legs supported on bolster, covered. 10 minutes',
    ],
    benefits: [
      'Targets deep connective tissue and fascia',
      'Releases chronic holding patterns',
      'Improves joint mobility and health',
      'Promotes deep physical and mental rest',
      'Balances nervous system profoundly',
    ],
    precautions: [
      'Never push or force in Yin yoga',
      'Use lots of props for comfort',
      'Come out slowly if you feel pain',
      'Stay warm with blankets throughout',
    ],
  },

  // ==========================================
  // WEEK 4: EXPERT MASTERY (Days 22-28)
  // ==========================================

  {
    id: 'exp-day22',
    title: 'Advanced Backbends - Wheel Variations',
    description: 'Deep backbending practice with Urdhva Dhanurasana and progressions',
    level: 'EXPERT',
    category: 'ADVANCED_ASANAS',
    duration: 40,
    day: 22,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8t0jyl11dg0bpqcvwmdpcz-SaKryYFy3PNBn6iUofGf03Oe2pDUWa.jpg?download=1',
    teacherScript: `
Today we practice deep backbends culminating in Wheel Pose - Urdhva Dhanurasana - and its variations. This requires thorough warm-up and full body engagement.

Begin with ten minutes of Sun Salutations including deep lunges and Upward Dog holds. Build heat in your body and prepare your spine for deep bending.

Now gentle backbend preparation. Lie on your belly. Practice Cobra, lifting higher with each repetition. Do five Cobras. Then Locust Pose three times, thirty seconds each. Then Bow Pose three times, thirty seconds each. Your back is getting ready.

Next, Bridge Pose progression. Lie on your back with feet under knees. Lift into Bridge. Hold one minute. Lower briefly, then lift again higher. Hold one minute. On your third Bridge, lift your heels off the floor, coming onto your tiptoes. This increases the intensity. Hold thirty seconds.

Now we're ready for Wheel Pose. Lie on your back. Place your hands by your ears, fingers pointing toward your shoulders. Place your feet hip-width apart under your knees. Press into your hands and feet simultaneously and lift your hips and chest up into a full backbend. Straighten your arms as much as you can. Press your chest toward the wall behind you. Hold for thirty seconds. Come down slowly and rest. Take three deep breaths. Repeat for five total wheel poses, each one lasting thirty seconds to one minute.

Wheel Pose variations. If you're comfortable in Wheel, try lifting one leg up toward the ceiling. Hold twenty seconds. Switch legs. Or try walking your hands closer to your feet to deepen the bend. Hold twenty seconds.

After your final Wheel, hug your knees into your chest and rock gently side to side for two minutes.

Counter poses are essential. Do Child's Pose for two minutes. Then Seated Forward Fold for two minutes. Finally, a gentle Supine Twist on each side for two minutes.

End in Savasana for five minutes.

Powerful backbending work today!
    `,
    instructions: [
      '☀️ SUN SALUTATION WARM-UP: Deep lunges, long Upward Dogs. 10 minutes',
      '🐍 BACKBEND PREP: 5 Cobras, 3 Locusts (30 sec each), 3 Bows (30 sec each)',
      '🌉 BRIDGE PROGRESSION: Regular bridge 1 min, higher bridge 1 min, tiptoereads bridge 30 sec',
      '🎡 WHEEL POSE: Press up into full backbend. 30 sec-1 min, 5 repetitions',
      '🎡 WHEEL VARIATIONS: Lift one leg, or walk hands closer to feet. 20 sec holds',
      '🤗 COUNTER POSES: Knees to chest 2 min, Child Pose 2 min, Forward Fold 2 min, Twist 2 min each side',
      '💤 SAVASANA: 5 minutes final rest',
    ],
    benefits: [
      'Opens entire front body dramatically',
      'Builds tremendous back strength',
      'Increases spine flexibility and mobility',
      'Energizes and invigorates the body',
      'Builds courage and confidence',
    ],
    precautions: [
      'Only practice when thoroughly warmed up',
      'Never force or crank into backbends',
      'Keep legs and arms engaged to protect spine',
      'Always do counter poses afterward',
    ],
  },

  {
    id: 'exp-day23',
    title: 'Forearm Balance & Advanced Inversions',
    description: 'Building toward Pincha Mayurasana with strength and technique work',
    level: 'EXPERT',
    category: 'ADVANCED_ASANAS',
    duration: 40,
    day: 23,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8sy9j411d80bpq26eghydd-c40SpyKx2o3x3iw00RLlmkKYdgLMrh.jpg?download=1',
    teacherScript: `
Today we work toward Forearm Balance - Pincha Mayurasana. This advanced inversion requires significant shoulder strength, core control, and courage.

Begin with shoulder warm-up. Come onto hands and knees. Do twenty Cat-Cow flows. Then Downward Dog, pedaling your feet for one minute. Thread the Needle on each side for one minute. Your shoulders need to be warm and mobile.

Now Dolphin Pose for shoulder strengthening. On your forearms, lift your hips into an inverted V. Hold one minute. Walk your feet toward your elbows and hold thirty seconds. Walk your feet back out. Repeat this sequence five times. Your shoulders will burn - that's good.

Dolphin Pushups. From Dolphin Pose, shift your weight forward so your chin comes over your hands. Then press back to Dolphin. Do ten pushups. Rest in Child's Pose. Repeat two more sets of ten.

Now Forearm Balance preparation at the wall. Kneel facing a wall, forearms on the floor parallel to each other, shoulder-width apart. Measure the distance by grabbing opposite elbows, then release and keep forearms that width. Lift your hips and walk your feet up the wall until your body is vertical. Hold as long as you can, working up to one minute. Come down and rest. Repeat five times.

Forearm Balance attempts in the center of the room. From Dolphin, walk your feet close. Lift one leg high. Hop gently off your standing leg, trying to find your balance point. It's okay if you don't get it today - the practice is in the attempt. Make ten attempts.

L-shaped Forearm Stand. At the wall, walk your feet up until your body forms an L shape - legs parallel to the floor. This builds tremendous core strength. Hold one minute. Rest. Repeat three times.

Finally, Shoulder Stand - Salamba Sarvangasana. Lie on your back. Lift your legs and hips, supporting your back with your hands. Try to bring your torso vertical. Hold for three minutes, breathing steadily.

Counter with Plow Pose - legs over head - for one minute, then Fish Pose to open your throat for two minutes.

End in Savasana for five minutes.

Strong inversion work today!
    `,
    instructions: [
      '💆 SHOULDER WARM-UP: 20 Cat-Cows, Down Dog pedal 1 min, Thread Needle 1 min each side',
      '🐬 DOLPHIN STRENGTHENING: Hold 1 min, walk feet in hold 30 sec, walk out. 5 rounds',
      '💪 DOLPHIN PUSHUPS: Shift forward and back. 10 reps, 3 sets',
      '🤸 FOREARM BALANCE AT WALL: Vertical body, feet on wall. Hold building to 1 min. 5 attempts',
      '🤸 CENTER ROOM ATTEMPTS: Hop to balance. 10 attempts',
      '🅱️ L-SHAPED STAND: Feet on wall, legs parallel to floor. 1 min, 3 times',
      '🧘 SHOULDER STAND: Vertical torso supported. 3 minutes',
      '🐟 COUNTER: Plow 1 min, Fish 2 min, Savasana 5 min',
    ],
    benefits: [
      'Builds exceptional shoulder and core strength',
      'Improves balance and body awareness',
      'Increases confidence in inversions',
      'Enhances focus and determination',
      'Strengthens entire upper body',
    ],
    precautions: [
      'Use wall support while learning',
      'Warm up shoulders thoroughly',
      'Place padding under forearms',
      'Come down immediately if you feel strain',
    ],
  },

  {
    id: 'exp-day24',
    title: 'Full Splits - Hanumanasana Mastery',
    description: 'Deep hip and hamstring work progressing toward full front splits',
    level: 'EXPERT',
    category: 'FLEXIBILITY_FLOW',
    duration: 45,
    day: 24,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8t0p6h11di0bpqc8j92eyc-Lx60U6gQVT67XnBOmwiqcq8ycJyMFP.jpg?download=1',
    teacherScript: `
Today we work systematically toward Front Splits - Hanumanasana. This requires patience, consistency, and deep breathing. Never force your way into splits - let gravity and time do the work.

Begin with ten minutes of Sun Salutations with very deep lunges. In each lunge, hold for five breaths. This begins opening your hips and hamstrings.

Now Reclined Hand-to-Big-Toe - Supta Padangusthasana. Lie on your back with a strap around your right foot. Extend your right leg up, keeping it straight. Hold two minutes. Then open your leg out to the right side, letting it fall toward the floor. Hold two minutes. Bring it back to center and flex your foot strongly toward your face for one minute. Switch sides and repeat the entire sequence.

Pyramid Pose - Parsvottanasana. Step your right foot back three feet. Square your hips forward. Fold deeply over your front leg, bringing your hands to blocks if needed. Your back leg should be completely straight. Hold for three minutes. Feel your hamstrings gradually releasing. Switch sides.

Now Low Lunge - Anjaneyasana - with pulsing. Right foot forward, back knee down. Sink deeply into your hip flexors. Hold one minute. Now pulse gently up and down ten times. Sink deep again and hold two more minutes. Your hip flexors are releasing. Switch sides.

Half Split - Ardha Hanumanasana. From your low lunge on the right side, begin to straighten your front leg and sit back, bringing your hips over your back knee. Fold forward over your straight front leg. This is intense hamstring stretch. Hold three minutes, breathing deeply into the back of your leg. Switch sides.

Finally, Full Splits attempt - Hanumanasana. From your low lunge on the right side, place blocks under your hands on either side of your hips. Very gradually begin to slide your front heel forward and your back knee back. Go only as far as feels like a strong stretch, not pain. You may not reach the floor today, and that's perfectly fine. Use your blocks for support. Hold for five full minutes wherever you are. Breathe slowly and let gravity gradually pull you deeper. Switch sides carefully.

Counter with Happy Baby Pose for two minutes and Supine Figure Four stretch on each side for two minutes.

End in Savasana for five minutes.

Patient flexibility work today!
    `,
    instructions: [
      '☀️ DEEP LUNGE SUN SALS: Hold each lunge 5 breaths. 10 minutes',
      '🦵 SUPTA PADANGUSTHASANA: Leg up 2 min, leg out to side 2 min, flex foot 1 min. Each side',
      '📐 PYRAMID POSE: Back leg straight, fold over front leg. 3 minutes each side',
      '🦎 LOW LUNGE WITH PULSES: Sink deep 1 min, pulse 10 times, hold 2 min. Each side',
      '🦵 HALF SPLITS: Straighten front leg, fold forward. 3 minutes each side',
      '🤸 FULL SPLITS ATTEMPT: Blocks for support, slide gradually. Hold 5 minutes wherever you are. Each side',
      '🤗 COUNTER: Happy Baby 2 min, Figure Four 2 min each side, Savasana 5 min',
    ],
    benefits: [
      'Dramatically increases hamstring flexibility',
      'Opens hip flexors and groin muscles',
      'Improves overall leg flexibility and range',
      'Builds patience and mental discipline',
      'Enhances athletic performance',
    ],
    precautions: [
      'Never bounce or force into splits',
      'Use blocks or bolsters for support',
      'Practice on soft surface',
      'Progress slowly over weeks and months',
    ],
  },

  {
    id: 'exp-day25',
    title: 'Binding & Advanced Twists',
    description: 'Deep twisting postures with arm binds and advanced variations',
    level: 'EXPERT',
    category: 'ADVANCED_ASANAS',
    duration: 40,
    day: 25,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8szlw211de0bpq3yrjejbm-3PeqdYlVF9VYGOFDLeRyMOgo97Ahut.jpg?download=1',
    teacherScript: `
Today we practice advanced twists with binds. Binds deepen twists and require significant shoulder flexibility and core strength.

Begin with shoulder opening. Cow Face arms on each side - one arm up and over shoulder, other arm from below, clasp hands behind back. Hold two minutes each side. Use a strap if needed.

Eagle arms - wrap arms and bring palms together. Hold one minute each side, switching which arm is on top.

Now Revolved Side Angle with Bind - Parivrtta Parsvakonasana. Step into Warrior Two on the right. Twist to the right and bring your left elbow outside your right knee. Press strongly. Now reach your left arm under your right thigh. Reach your right arm behind your back. Clasp your hands together in a bind. Keep twisting. Hold one minute. Switch sides.

Bound Extended Side Angle - Baddha Utthita Parsvakonasana. From Warrior Two on the right, lower your right forearm to your right thigh. Reach your right arm under your right thigh. Reach your left arm behind your back and clasp hands in a bind. Hold one minute. Switch sides.

Marichyasana C - Seated twist with bind. Sit with your right leg extended and left foot placed on the outside of your right knee. Twist to the left. Reach your right arm forward, then wrap it around your left shin. Reach your left arm behind your back and clasp your hands. Sit tall and twist deeply. Hold two minutes. Switch sides.

Bird of Paradise - Svarga Dvijasana. This is very advanced. From Bound Extended Side Angle on the right, begin to straighten your right leg while maintaining the bind. Once your right leg is straight, slowly stand up, lifting your bound leg up. Your leg and torso form one straight line. Hold twenty seconds if you can achieve this. Carefully come out and try the other side.

Supine Twist with Bound Knee. Lie on your back. Bend your right knee and grab it with your left hand. Guide your right knee across your body to the left. Now reach your right hand behind your back and try to grab your left thigh. Hold this bound twist for two minutes. Switch sides.

Counter with gentle seated twists without binds for two minutes each side.

End in Child's Pose for three minutes.

Challenging twist work today!
    `,
    instructions: [
      '🐮 COW FACE ARMS: Clasp hands behind back. 2 min each side, use strap if needed',
      '🦅 EAGLE ARMS: Wrap arms, palms touch. 1 min each side',
      '🔄 REVOLVED SIDE ANGLE WITH BIND: Twist, elbow outside knee, bind under thigh. 1 min each',
      '🎀 BOUND EXTENDED SIDE ANGLE: Forearm to thigh, bind under. 1 min each',
      '🪢 MARICHYASANA C: Seated twist, wrap arm around shin, clasp behind. 2 min each',
      '🦜 BIRD OF PARADISE: Bound side angle, straighten leg, stand. 20 sec each if possible',
      '🌀 SUPINE TWIST WITH BIND: Knee across, reach behind back. 2 min each',
      '🧘 COUNTER: Gentle seated twists 2 min each, Child Pose 3 min',
    ],
    benefits: [
      'Maximum spinal rotation and detoxification',
      'Opens shoulders significantly',
      'Builds core strength and control',
      'Enhances balance and coordination',
      'Develops mental focus and determination',
    ],
    precautions: [
      'Only attempt binds when very warmed up',
      'Never force shoulders into binds',
      'Use strap to work toward binds gradually',
      'Come out if you feel shoulder strain',
    ],
  },

  {
    id: 'exp-day26',
    title: 'Peak Pose Compilation - Mastery Flow',
    description: 'Flowing sequence integrating all advanced poses learned',
    level: 'EXPERT',
    category: 'POWER_YOGA',
    duration: 50,
    day: 26,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8szjbe11dd0bpqct3lg20m-EWqWe0H0orjR7gEeCAIIDPqaGYQ22J.jpg?download=1',
    teacherScript: `
Today we bring together everything you've learned in a masterful flowing sequence. This practice includes all the peak poses from this four-week journey.

Begin with ten minutes of warming up. Sun Salutations with deep lunges, hip openers, and shoulder stretches. Prepare your entire body.

Now the Mastery Flow sequence. We'll flow through this complete sequence three times. Each complete sequence takes about twelve minutes.

Start in Tadasana. Flow to Warrior Three, hold thirty seconds. Step to Warrior Two. Flow to Extended Side Angle with bind. Hold thirty seconds. Rise up, Warrior Two. Reverse Warrior. Windmill your arms down. Revolved Triangle. Hold thirty seconds. Step back to Plank. Lower to Crow Pose from Plank. Hold ten seconds. Chaturanga. Upward Dog. Downward Dog. Three-Legged Dog, right leg high. Flow to Low Lunge. Walk hands back, Half Splits. Sink forward, Full Split attempt. Hold one minute. Tuck back knee, Low Lunge. Step back to Plank. Side Plank right side. Hold twenty seconds. Return to Plank. Step forward, Pyramid Pose right side. Hold thirty seconds. Rise up. Step feet together. Forward Fold. Halfway Lift. Forward Fold. Sweep up to standing, Tadasana. Repeat the entire sequence on the left side. That's one complete round.

After three rounds of the Mastery Flow, practice your best arm balances. Crow Pose, Side Crow, Flying Pigeon. Make three attempts at each.

Now your deepest backbend. Choose Bridge or Wheel. Hold for one full minute. Repeat three times.

Practice your most challenging balance pose. Maybe Dancer's Pose or Standing Splits. Hold one minute each side.

End with five minutes in Headstand or Shoulder Stand if those are available to you. Otherwise, practice Legs Up the Wall.

Counter poses: Seated Forward Fold three minutes, Supine Twist two minutes each side.

Savasana for ten minutes. You've earned a deep rest.

Incredible peak practice today!
    `,
    instructions: [
      '☀️ WARM-UP: 10 minutes Sun Sals with deep variations',
      '🌟 MASTERY FLOW SEQUENCE: Warrior III → Bound Side Angle → Revolved Triangle → Crow → Half Splits → Full Split → Side Plank → Pyramid. 12 minutes per round, 3 complete rounds both sides',
      '🦅 ARM BALANCES: Crow, Side Crow, Flying Pigeon. 3 attempts each',
      '🎡 DEEPEST BACKBEND: Bridge or Wheel. 1 minute, 3 times',
      '💃 HARDEST BALANCE: Dancer or Standing Splits. 1 minute each side',
      '🤸 INVERSION: Headstand, Shoulder Stand, or Legs Up Wall. 5 minutes',
      '🧘 COUNTER: Forward Fold 3 min, Twists 2 min each, Savasana 10 min',
    ],
    benefits: [
      'Integrates all skills learned over 28 days',
      'Demonstrates your complete yoga journey',
      'Builds confidence in advanced practice',
      'Provides full-body comprehensive workout',
      'Celebrates your dedication and progress',
    ],
    precautions: [
      'Only include poses you can do safely',
      'Modify as needed - this is YOUR practice',
      'Rest when needed between peak poses',
      'Honor your body\'s wisdom',
    ],
  },

  {
    id: 'exp-day27',
    title: 'Power Meditation & Pranayama Integration',
    description: 'Combining advanced breathing techniques with deep meditation practice',
    level: 'EXPERT',
    category: 'PRANAYAMA',
    duration: 50,
    day: 27,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8t0oxv11dh0bpq0xdr5jpu-TWOYLq7gwkZbF0ocDhnwAh5sgh88Q0.jpg?download=1',
    teacherScript: `
Today we dedicate our practice to the subtle body - breath and meditation. This is where the true power of yoga lives.

Sit comfortably with your spine erect. For the first five minutes, simply observe your natural breath. Don't change anything. Just watch. Notice the quality, the rhythm, the sensations.

Now Nadi Shodhana - Alternate Nostril Breathing. We'll practice for ten minutes. Use your thumb and ring finger to alternately close your nostrils. Breathe slowly and evenly. Your breath should be smooth and silent. Let your mind become absorbed in the rhythm.

Next, Kapalabhati - Skull Shining Breath. We'll do five rounds of one hundred eight breaths each. Between rounds, rest for two full minutes. Notice the clarity and alertness building in your mind.

Now advanced Kumbhaka - Breath Retention. Take a comfortable inhale. Retain your breath for as long as you comfortably can. Exhale slowly. Breathe normally for a few cycles. Repeat. Work with retention after inhale for ten rounds, gradually increasing the length. Then practice retention after exhale for ten rounds.

Bhramari - Humming Bee Breath. Close your ears with your thumbs, fingers over your eyes. Inhale deeply. As you exhale, make a deep humming sound like a bee. Feel the vibration in your head. Repeat twenty times. This is powerfully calming.

Now we move into deep meditation - Dhyana. Sit in complete stillness for twenty minutes. Choose your focus point: your breath, a mantra, the space between your eyebrows, or simply pure awareness. When thoughts arise, acknowledge them without judgment and return to your point of focus. Sit like a mountain - unmovable, unshakeable.

After twenty minutes, slowly bring your awareness back. Open your eyes gently.

End with Savasana for five minutes, integrating all the benefits of your practice.

Powerful subtle practice today!
    `,
    instructions: [
      '🧘 BREATH OBSERVATION: Simply watch natural breath. 5 minutes',
      '👃 NADI SHODHANA: Alternate nostril breathing. 10 minutes',
      '💨 KAPALABHATI: 5 rounds of 108 breaths. 2-minute rest between rounds',
      '🫁 ADVANCED KUMBHAKA: Retention after inhale (10 rounds) and after exhale (10 rounds). Gradually increase length',
      '🐝 BHRAMARI: Humming bee breath. 20 repetitions',
      '🧘 DHYANA: Deep meditation, chosen focus point. 20 minutes',
      '💤 SAVASANA: Integration. 5 minutes',
    ],
    benefits: [
      'Purifies and energizes subtle energy channels',
      'Dramatically increases mental clarity',
      'Develops deep concentration and focus',
      'Calms and balances entire nervous system',
      'Prepares mind for advanced meditation',
    ],
    precautions: [
      'Practice on completely empty stomach',
      'Sit with proper spinal alignment',
      'Never strain the breath',
      'Be patient with meditation - mind will wander',
    ],
  },

  {
    id: 'exp-day28',
    title: 'Completion & Gratitude - Full Integration',
    description: 'Celebratory gentle practice honoring your 28-day journey with reflection',
    level: 'EXPERT',
    category: 'MEDITATION',
    duration: 45,
    day: 28,
    imageUrl: 'https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/4e13a007-4066-4b5b-8dba-6444f204a643_cmj8t0oxv11dh0bpq0xdr5jpu-TWOYLq7gwkZbF0ocDhnwAh5sgh88Q0.jpg?download=1',
    teacherScript: `
Congratulations! Today is Day Twenty-Eight - the completion of your yoga journey. This is not an end but a new beginning. Today we practice gently, with gratitude and reflection.

Begin seated. Close your eyes. For the next five minutes, think back over the past twenty-eight days. Remember Day One - how you felt, what was challenging. Notice how much you've grown. Feel genuine appreciation for yourself - for showing up, for persevering, for dedicating yourself to this practice. Place your hands on your heart. Take three deep breaths of gratitude.

Now let's move through a gentle, flowing sequence, honoring every part of your body that has worked so hard these past four weeks.

Start with five gentle Sun Salutations. Move slowly and with love. Thank your body with each movement.

Warrior Two on both sides. Hold for one minute each. Remember when this pose was challenging. Notice how strong you've become.

Tree Pose. Hold two minutes each side. Find your steadiness, your center. You are rooted and you are reaching.

Pigeon Pose. Hold for five minutes each side. Thank your hips for opening, for releasing, for carrying you.

Seated Forward Fold. Hold for five minutes. Surrender. Let go. Breathe.

Gentle Twist on each side. Two minutes each. Release anything you no longer need.

Now lie down for a Body Gratitude Practice. Starting at your toes, mentally thank each part of your body. "Thank you, feet, for supporting me. Thank you, legs, for growing stronger. Thank you, hips, for opening. Thank you, belly, for breathing. Thank you, heart, for beating. Thank you, shoulders, for carrying. Thank you, mind, for learning." Move slowly through your entire body with sincere gratitude.

Finally, Savasana for fifteen minutes. Rest deeply. You have earned this. Your twenty-eight day journey is complete. And tomorrow, if you choose, you begin again - wiser, stronger, more awakened.

When you're ready, slowly open your eyes. Sit up gently. Bring your hands together at your heart.

The light in me honors the light in you. Namaste.

🙏 Congratulations on completing twenty-eight days of dedicated yoga practice! You are amazing!
    `,
    instructions: [
      '🙏 SEATED GRATITUDE: Reflect on 28-day journey. Hands on heart. 5 minutes',
      '☀️ GENTLE SUN SALUTATIONS: Slow, loving movements. 5 rounds',
      '⚔️ WARRIOR TWO: Notice your strength. 1 minute each side',
      '🌳 TREE POSE: Find steadiness and center. 2 minutes each side',
      '🕊️ PIGEON POSE: Thank your hips. 5 minutes each side',
      '🙇 SEATED FORWARD FOLD: Surrender. 5 minutes',
      '🌀 GENTLE TWIST: Release what you no longer need. 2 minutes each side',
      '🙏 BODY GRATITUDE PRACTICE: Thank each body part from toes to crown',
      '💤 SAVASANA: Deep rest and integration. 15 minutes',
      '🙏 CLOSING: Hands at heart. Namaste.',
    ],
    benefits: [
      'Integrates all learning from 28-day journey',
      'Cultivates deep self-appreciation',
      'Honors the body-mind connection',
      'Celebrates personal growth and dedication',
      'Prepares you to continue your practice',
    ],
    precautions: [
      'This is a gentle, restorative practice',
      'Listen to your body after 27 intense days',
      'Take extra time in any pose that calls to you',
      'Rest as much as you need',
    ],
  },
];

/**
 * Get exercise by day number (1-28, auto-repeats)
 */
export function getExerciseByDay(day: number): Exercise | undefined {
  // Calculate which day in the 28-day cycle
  const cycleDay = ((day - 1) % 28) + 1;
  return EXERCISES.find((ex: Exercise) => ex.day === cycleDay);
}

/**
 * Get exercises by level
 */
export function getExercisesByLevel(level: UserLevel): Exercise[] {
  return EXERCISES.filter((ex: Exercise) => ex.level === level);
}

/**
 * Get today's exercise based on user's start date (auto-repeats every 28 days)
 */
export function getTodayExercise(startDate: Date): Exercise | undefined {
  const today = new Date();
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  // Calculate day in 28-day cycle (1-28)
  const currentDay = (daysDiff % 28) + 1;
  return getExerciseByDay(currentDay);
}

/**
 * Check if user has access to an exercise based on their level
 */
export function hasAccessToExercise(userLevel: UserLevel, exercise: Exercise): boolean {
  const levelHierarchy: Record<UserLevel, number> = {
    BEGINNER: 1,
    INTERMEDIATE: 2,
    EXPERT: 3,
  };

  return levelHierarchy[userLevel] >= levelHierarchy[exercise.level];
}

/**
 * Get day number in current 28-day cycle
 */
export function getCurrentCycleDay(startDate: Date): number {
  const today = new Date();
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return (daysDiff % 28) + 1;
}

/**
 * Get total number of completed cycles
 */
export function getCompletedCycles(startDate: Date): number {
  const today = new Date();
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return Math.floor(daysDiff / 28);
}
