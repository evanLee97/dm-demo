<template>
  <div>
    <el-input v-model="jsonData" placeholder="输入 JSON 数据"></el-input>
    <el-calendar :data="calendarData"></el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: '', // 输入的 JSON 数据
      calendarData: [] // 日历数据
    };
  },
  watch: {
    jsonData(newValue) {
      try {
        const parsedData = JSON.parse(newValue); // 解析 JSON 数据
        this.calendarData = this.processData(parsedData); // 处理数据
      } catch (error) {
        console.error('JSON 解析错误：', error);
      }
    }
  },
  methods: {
    // 处理数据，生成日历数据
    processData(parsedData) {
      const calendarData = [];

      for (const date in parsedData) {
        if (Object.hasOwnProperty.call(parsedData, date)) {
          const dayData = parsedData[date];
          const day = date.split('-')[2]; // 获取日期

          const cellData = {
            day: day,
            isSelected: true, // 假设都被选中
            workTime: `${dayData.start} - ${dayData.end}` // 上下班时间
          };

          calendarData.push(cellData);
        }
      }

      return calendarData;
    }
  }
};
</script>
{
  "2024-02-01": {
    "start": "09:00",
    "end": "18:00"
  },
  "2024-02-02": {
    "start": "08:30",
    "end": "17:30"
  },
  // 其他日期的工作时间
}
