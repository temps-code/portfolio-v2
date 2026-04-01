# Skill: Framer Motion Animations

## Variantes base reutilizables

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

## Patrón scroll-triggered

```tsx
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

// Siempre usar whileInView + viewport once:true para performance
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-50px' }}
>
  contenido
</motion.div>
```

## Patrón stagger en lista

```tsx
<motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.li key={item.id} variants={fadeInUp}>
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

## Reglas
- `viewport={{ once: true }}` siempre — no re-animar en scroll up
- No usar `animate` directamente para scroll — usar `whileInView`
- Duraciones: 0.3-0.6s máximo. Más de eso se siente lento.
- Componentes con Framer Motion en Astro requieren `client:load`
