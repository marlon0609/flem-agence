<template>
  <section class="showreel">
    <div class="container">
      <div
        class="frame"
        @mousemove="wakeControls"
        @click="wakeControls"
      >
        <!-- VIDEO -->
        <video
          ref="videoEl"
          class="vid"
          :muted="isMuted"
          playsinline
          preload="metadata"
          @click.prevent="togglePlay"
          autoplay
          loop
          @play="isPlaying = true"
          @pause="isPlaying = false"
        >
          <source src="https://flemagence.com/flem-showreel.mp4?inline=true" type="video/mp4" />
        </video>

        <!-- PLAY CENTRAL GEANT -->
        <button
          class="big-play"
          v-if="!isPlaying"
          @click.stop="togglePlay"
          aria-label="Lire la vidéo"
        >
          <svg viewBox="0 0 24 24" width="34" height="34">
            <path fill="currentColor" d="M8 5v14l11-7z"/>
          </svg>
        </button>

        <!-- OVERLAY + CONTROLES -->
        <div class="overlay" :class="{ awake: controlsAwake }">
          <!-- Play / Pause -->
          <button
            class="ctrl play"
            @click.stop="togglePlay"
            aria-label="Play / Pause"
          >
            <svg v-if="!isPlaying" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M8 5v14l11-7z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M6 5h4v14H6zm8 0h4v14h-4z"/>
            </svg>
          </button>

          <!-- Volume -->
          <button
            class="ctrl vol"
            @click.stop="toggleMute"
            aria-label="Mute / Unmute"
          >
            <svg v-if="isMuted" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M4 10v4h3l4 4V6L7 10H4z"/>
              <path fill="currentColor" d="M16.5 12l3.5 3.5-1.5 1.5L15 13.5l-3.5 3.5-1.5-1.5L13.5 12 10 8.5 11.5 7 15 10.5 18.5 7 20 8.5z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M4 10v4h3l4 4V6L7 10H4z"/>
              <path d="M14.5 8.5a5 5 0 010 7" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
              <path d="M16.5 6.5a8 8 0 010 11" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- Progression -->
          <div class="progress">
            <span class="dot"></span>
            <div class="bar">
              <div class="fill" :style="{ width: progress + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const videoEl = ref(null);

const isPlaying = ref(false);
const isMuted = ref(true);
const controlsAwake = ref(true);
const progress = ref(0);

let hideTimer = null;
let rafId = null;

/* ===== CONTROLES ===== */
const wakeControls = () => {
  controlsAwake.value = true;
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    controlsAwake.value = false;
  }, 1800);
};

const togglePlay = async () => {
  const v = videoEl.value;
  if (!v) return;

  try {
    if (v.paused) {
      await v.play();
      isPlaying.value = true;
    } else {
      v.pause();
      isPlaying.value = false;
    }
  } catch {
    isPlaying.value = false;
  }

  wakeControls();
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (videoEl.value) {
    videoEl.value.muted = isMuted.value;
  }
  wakeControls();
};

/* ===== PROGRESS ===== */
const updateProgress = () => {
  const v = videoEl.value;
  if (v && v.duration) {
    progress.value = Math.min(100, (v.currentTime / v.duration) * 100);
  }
  rafId = requestAnimationFrame(updateProgress);
};

/* ===== LIFECYCLE ===== */
onMounted(async () => {
  const v = videoEl.value;
  if (!v) return;

  v.muted = true;
  isMuted.value = true;

  try {
    await v.play();
    isPlaying.value = true;
  } catch {
    isPlaying.value = false;
  }

  wakeControls();
  rafId = requestAnimationFrame(updateProgress);
});

onBeforeUnmount(() => {
  clearTimeout(hideTimer);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<style scoped lang="scss">
.showreel {
  padding: 10px 0 70px;
}

.frame {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background: #000;
  border: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 30px 90px rgba(0,0,0,.55);
}

.vid {
  width: 100%;
  height: min(58vh, 520px);
  object-fit: cover;
  display: block;
  opacity: .96;
  filter: contrast(1.05) saturate(0.95);
  cursor: pointer;
}

/* ===== PLAY CENTRAL ===== */
.big-play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 96px;
  height: 96px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.22);
  background: rgba(0,0,0,.45);
  color: rgba(255,255,255,.95);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 30px 80px rgba(0,0,0,.6);
  transition: transform .25s ease, border-color .25s ease;
  cursor: pointer;
  z-index: 3;
}

.big-play:hover {
  transform: scale(1.05);
  border-color: rgba(255,255,255,.35);
}

/* ===== OVERLAY ===== */
.overlay {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: radial-gradient(800px 300px at 50% 120%, rgba(255,255,255,.06), transparent 55%);
}

/* ===== CONTROLES ===== */
.ctrl {
  pointer-events: auto;
  position: absolute;
  top: 18px;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.35);
  color: rgba(255,255,255,.92);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  transition: transform .18s ease, opacity .25s ease, border-color .25s ease;
  opacity: 0;
  z-index: 4;
}

.play { left: 18px; }
.vol  { right: 18px; }

.frame:hover .ctrl,
.overlay.awake .ctrl {
  opacity: 1;
}

.ctrl:hover {
  transform: translateY(-1px);
  border-color: rgba(255,255,255,.28);
}

/* ===== PROGRESS ===== */
.progress {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: opacity .25s ease;
  z-index: 4;
}

.frame:hover .progress,
.overlay.awake .progress {
  opacity: .85;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.85);
}

.bar {
  height: 2px;
  flex: 1;
  background: rgba(255,255,255,.24);
  border-radius: 999px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: rgba(255,255,255,.85);
  width: 0%;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .vid {
    height: 44vh;
  }
}

@media (max-width: 600px) {
  .showreel {
    padding: 0 0 50px;
  }
  .vid {
    height: 38vh;
  }
  .big-play {
    width: 72px;
    height: 72px;
  }
  .ctrl {
    width: 36px;
    height: 36px;
    top: 12px;
  }
  .play { left: 12px; }
  .vol  { right: 12px; }
  .progress {
    left: 12px;
    right: 12px;
    bottom: 12px;
    gap: 8px;
  }
  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>
