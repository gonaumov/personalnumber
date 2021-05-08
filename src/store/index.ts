import { createStore } from 'vuex';
import { Store } from '@/store/store';

export default createStore<Store>({
  state: {
    selectedDate: false,
  },
  getters: {
    personalNumber: (state) => {
      const { selectedDate: newDate } = state;
      if (!newDate) { return false; }
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      const numbers = [
        ...day.toString().split('').map((num) => parseInt(num, 10)),
        ...month.toString().split('').map((num) => parseInt(num, 10)),
        ...year.toString().split('').map((num) => parseInt(num, 10)),
      ];

      const calculateSum = (input: number[]): string => input.reduce((acc, current) => {
        const sum = acc + current;
        return sum;
      }, 0).toString(10);

      let result = calculateSum(numbers);

      while (result.length !== 1) {
        result = calculateSum(result.split('').map((num) => parseInt(num, 10)));
      }

      return result;
    },
    getDescription: (state, getters) => {
      if (!getters.personalNumber) {
        return false;
      }
      const result = parseInt(getters.personalNumber, 10);
      const descriptions: Record<string, string> = {
        1: `Those who have a personal number 1 are ambitious and groundbreaking. They like to get things done.
Their ability to concentrate is amazing and they are able to focus regardless of the chaos around them.
People who wear the number as a personal number are usually objective, able to make serious decisions with ease.
Sometimes these people are very stubborn and self-centered. When they are given a specific goal, they follow it steadily,
while performing it. In that case, the goal overshadows their ego and they turn their backs on their identity just to achieve the goal,
which they have in front of them. This makes the vibration of the unit successful.
        `,
        2: `
        Those who have a personal number 2 are honest, can be trusted and often change their moods. These people are very talented and usually have an awful lot of great ideas. They often become so distracted that they do several things at once, and this usually does not lead to good results. They are often philosophers and you can turn to them when you need honest advice. The owners of the number 2 are gifted with the gift to bring people together. They are good mediators in negotiations.
        `,
        3: `
        People with this number are usually lucky. They are always in the right place at the right time. They also have the ability to make the right decisions. They are extremely enterprising and intelligent. Those who have this number are very creative and are very good at communication. They can be manipulative, but often their motives are quite good.
       `,
        4: `
As we can expect, the people representing the 4 are stable and balanced natures. They tidy things up. If any work needs to be done accurately in detail, they are the people you need to turn to. They easily handle difficult projects, convey them with methodological accuracy and on time. They strive for order in their lives and sometimes remain misunderstood. However, this does not irritate them so much because they understand the importance of their position and the role they play in the lives of others.
       `,
        5: `
 People who have this number are very sociable and often play an active role in society. They have a high spirit and love to travel. They do not like the routine and adapt to new situations. They deal with challenges with common sense and unconventional solutions. The 5s have many projects and ideas at the same time and while trying to implement them, they fail in some of them, but this does not bother them at all and they move on.
       `,
        6: `
        People who have this number are creative but controversial and often need to explain their actions. They are very good at accounts and are very intelligent and easily find common ground with people. These people are lovers of harmony and do not like opposition, so they prefer "to make love, not war." They are pacifists and take seriously their role as helpers and saviors of society.
         `,
        7: `
  The people who own it are scientists and poets. They are very intelligent and have amazing analytical skills. However, their consciousness is in their dreams, where they can easily move things and events as they wish. Their reality is very different from the others - this is a reality that they have created for themselves. These people have the ability to gather the perfect people, places and events in their lives, which leads them on the path to constant renewal.
       `,
        8: `
  People who have a personal number 8 are extremely successful - mainly in a business where success is based on progress, which takes little time. These people are able to anticipate circumstances and trends and be piled on the wave, which is their great success. They also understand well when to turn down suggestions because of their special intuition, which allows them to see the cyclical nature of things. The owners of the 8 are very good at games of chance, as well as at stock exchanges, as well as any transactions, the success of which is based on certain statistics.
      `,
        9: `
  Those who own the number 9 are magnetic, charming and present themselves with ease and confidence. They are familiar with countless topics, and are ready to express their skills in seemingly countless arenas. When they have room to perform, these people create incredible feats in their performance. These people are very charming and easily lead groups of people. They are perfect for leaders and rulers who would govern wisely and wisely.
               `,
      };
      if (result in descriptions) {
        return descriptions[result];
      }
      throw new Error('Unknown number passed');
    },
  },
  mutations: {
    updateDate: (state, payload) => {
      state.selectedDate = payload.selectedDate;
    },
  },
  actions: {
  },
  modules: {
  },
});
