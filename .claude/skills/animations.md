# Skill: Framer Motion Animations

## Base reusable variants

```typescript
// src/lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}
```

## Scroll-triggered pattern

```tsx
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// Always use whileInView + viewport once:true for performance
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-50px' }}
>
  content
</motion.div>
```

## Stagger list pattern

```tsx
<motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.li key={item.id} variants={fadeInUp}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

## Rules
- `viewport={{ once: true }}` always — do not re-animate on scroll up
- Never use `animate` directly for scroll — use `whileInView`
- Durations: 0.3–0.6s max. Longer feels sluggish.
- Components using Framer Motion in Astro require `client:load`
