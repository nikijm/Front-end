<template>
  <div class="post_job_content">
    <Form
      ref="jobFormbasic"
      :model="jobFormModel"
      :rules="jobsFormRule"
      inline
      label-position="left"
      :label-width="160"
    >
      <Row :wrap="true">
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="type" label="Job Type">
            <Select v-model="jobFormModel.type" style="width: 220px" placeholder="Select job type">
              <Option v-for="item in jobTypeOptions" :value="item" :key="item">{{ item }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="industry" label="Industry">
            <Select
              v-model="jobFormModel.industry"
              style="width: 220px"
              placeholder="Select or enter"
              filterable
              allow-create
              @on-create="handleCreate($event, 'industry')"
            >
              <Option v-for="item in industryOption" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select></FormItem
          ></Col
        >
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="title" label="Job Tttle">
            <Input
              type="text"
              v-model="jobFormModel.title"
              placeholder="e.g. Team Leader"
              style="width: 220px"
            >
            </Input>
          </FormItem>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="category" label="Job Category">
            <Select
              v-model="jobFormModel.category"
              style="width: 220px"
              placeholder="Select or enter"
              filterable
              allow-create
              @on-create="handleCreate($event, 'jobCategory')"
            >
              <Option v-for="item in jobCategoryOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="experience" label="Required Experience">
            <Select
              v-model="jobFormModel.experience"
              style="width: 220px"
              placeholder="e.g. 3 years"
            >
              <Option v-for="item in experienceOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="education" label="Required Education">
            <Select
              v-model="jobFormModel.education"
              style="width: 220px"
              multiple
              placeholder="e.g. Bachelor"
            >
              <Option v-for="item in educationOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="20" :sm="16" :md="12" :lg="12" :xxl="6">
          <FormItem prop="workStyle" label="Work Style">
            <Select v-model="jobFormModel.workStyle" style="width: 220px" placeholder="e.g. Remote">
              <Option v-for="item in workStyleOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :span="24">
          <FormItem prop="salary" label="Salary">
            <Select v-model="jobFormModel.salary" style="width: 220px" placeholder="e.g. Remote">
              <Option v-for="item in salaryOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :span="24">
          <FormItem prop="salaryRangeMin">
            <Input
              v-model="jobFormModel.salaryRangeMin"
              style="width: 220px"
              placeholder="e.g. 1,000,000"
            >
            </Input>
            <span>-</span>
            <Input
              v-model="jobFormModel.salaryRangeMax"
              style="width: 220px"
              placeholder="e.g. 5,000,000"
            >
            </Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <!-- worklocation -->
    <Divider plain></Divider>
    <Form
      ref="jobFromLocation"
      :model="jobFormLocationModel"
      label-position="left"
      :label-width="160"
      :rules="jobsFormLocationRule"
    >
      <!-- <span style="float: left; font-size: 17px; color: red; margin-top: 6px; margin-right: 2px"
        >*</span
      > -->
      <FormItem prop="workLocation" label="Work Location" :show-message="false">
        <Checkbox v-model="jobFormLocationModel.workLocation">Same as company address</Checkbox>
      </FormItem>
    </Form>
    <Form
      ref="jobFromLocation"
      :model="jobFormLocationModel"
      :rules="jobsFormLocationRule"
      label-position="top"
      style="margin-left: 160px"
    >
      <FormItem prop="country" label="country">
        <Select
          v-model="jobFormLocationModel.country"
          style="width: 220px"
          placeholder="e.g. Japan"
        >
          <Option v-for="item in countryOptions" :value="item.value" :key="item.label">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>
      <Row :gutter="20">
        <Col>
          <FormItem prop="postcode" label="Postcode">
            <Input
              type="text"
              v-model="jobFormLocationModel.postcode"
              placeholder="e.g. 1234567"
              style="width: 220px"
            >
            </Input> </FormItem
        ></Col>
        <Col>
          <FormItem prop="prefecture" label="Prefecture">
            <Select
              v-model="jobFormLocationModel.prefecture"
              style="width: 220px"
              placeholder="e.g. Tokyo"
            >
              <Option v-for="item in countryOptions" :value="item.value" :key="item.label">{{
                item.label
              }}</Option>
            </Select>
          </FormItem></Col
        >
      </Row>

      <FormItem prop="cityTown" label="city/town">
        <Input
          type="text"
          v-model="jobFormLocationModel.cityTown"
          placeholder="e.g. Minato-ku"
          style="width: 460px"
        >
        </Input>
      </FormItem>
      <FormItem prop="streetNumber" label="Street Number">
        <Input
          type="text"
          v-model="jobFormLocationModel.streetNumber"
          placeholder="e.g. 1-2-3"
          style="width: 460px"
        >
        </Input>
      </FormItem>
      <FormItem label="Building Name">
        <Input
          type="text"
          v-model="jobFormLocationModel.buildingName"
          placeholder="e.g. Ginza No.1 Building"
          style="width: 460px"
        >
        </Input>
      </FormItem>
      <FormItem label="Room Number">
        <Input
          type="text"
          v-model="jobFormLocationModel.roomNumber"
          placeholder="e.g. 123"
          style="width: 460px"
        >
        </Input>
      </FormItem>
    </Form>
    <!-- skills&languages -->
    <Divider plain></Divider>
    <Form
      ref="jobFromSkills"
      :model="jobFormSkillsModel"
      label-position="left"
      :label-width="160"
      :rules="jobsFormLocationRule"
    >
      <FormItem prop="skills" label="Required Skills">
        <!-- todo联级选择器没实现原型上的功能 -->
        <el-cascader
          :options="options"
          :props="props2"
          :show-all-levels="false"
          style="width: 460px"
        >
        </el-cascader>
      </FormItem>
      <FormItem prop="languages" label="Required Languages">
        <Select
          :model="jobFormSkillsModel.languages"
          style="width: 460px"
          multiple
          placeholder="e.g. Japan"
        >
          <Option v-for="item in languagesOptions" :value="item.value" :key="item.label">{{
            item.label
          }}</Option>
        </Select>
      </FormItem>
    </Form>
    <!-- job desc -->

    <Divider plain></Divider>
    <!-- id要为new wangeditor对象时候使用的id -->
    <Form
      ref="jobFromSkills"
      :model="jobFormSkillsModel"
      label-position="left"
      :label-width="160"
      :rules="jobsFormLocationRule"
    >
      <FormItem prop="description" label="Job Description">
        <div class="publish_content">
          <div name="editor" id="editor" ref="editor"></div>
        </div>
      </FormItem>
    </Form>

    <div style="text-align: center; margin-bottom: 0px">
      <Button type="primary" class="submit" shape="circle" @click="submitJobs()">Post now</Button>
    </div>
    <!-- <el-cascader :options="options" :props="props2" :show-all-levels="false"> </el-cascader> -->
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, onMounted } from 'vue'
  import { ElCascader } from 'element-plus'
  //这里名字无所谓, 就是待会new的时候要用这个名字new
  import EWangEditor from 'wangeditor'

  import {
    jobsFormRule,
    jobsFormLocationRule,
    jobTypeOptions,
    industryOption,
    jobCategoryOptions,
    experienceOptions,
    educationOptions,
    workStyleOptions,
    salaryOptions,
    countryOptions,
    languagesOptions
  } from './compontents/selectOptions'
  const jobFormbasic = ref()
  const jobFromLocation = ref()
  const jobFromSkills = ref()
  const props2 = {
    multiple: true,
    checkStrictly: true,
    emitPath: false
  }

  const options = [
    {
      value: 'guide',
      label: 'Guide',
      children: [
        {
          value: 'disciplines',
          label: 'Disciplines'
        },
        {
          value: 'navigation',
          label: 'Navigation'
        }
      ]
    },
    {
      value: 'component',
      label: 'Component',
      children: [
        {
          value: 'basic',
          label: 'Basic'
        },
        {
          value: 'form',
          label: 'Form'
        },
        {
          value: 'data',
          label: 'Data'
        },
        {
          value: 'notice',
          label: 'Notice'
        },
        {
          value: 'navigation',
          label: 'Navigation'
        },
        {
          value: 'others',
          label: 'Others'
        }
      ]
    }
  ]
  const casValue: any = ref([])
  const tag = ref(-1) // 标识符（重要）

  const change = (item: any) => {
    console.log('value', item)
    item.forEach((i: any) => {
      if (i[0] != tag.value) {
        tag.value = i[0]
      }
    }) // 如切换勾选，则让标识符的值等于勾选的父级的value
    let filterd = item.filter((v: any) => v[0] == tag.value) // 过滤出与标识符相符的选项
    casValue.value = []
    casValue.value.push(...filterd)
    console.log('casValue.value', casValue.value)
  }

  const jobFormModel = reactive({
    type: '',
    industry: '',
    title: '',
    category: '',
    experience: '',
    education: [],
    workStyle: '',
    salary: '',
    salaryRangeMin: '',
    salaryRangeMax: ''
  })
  const jobFormLocationModel = reactive({
    workLocation: false,
    country: '',
    postcode: '',
    prefecture: '',
    cityTown: '',
    streetNumber: '',
    buildingName: '',
    roomNumber: ''
  })
  const jobFormSkillsModel = reactive({
    skills: [],
    languages: []
  })
  const createNewSelect = reactive({
    industry: industryOption as [],
    jobCategory: jobCategoryOptions as []
  })
  //todo富文本编辑器跟ui设计上有差距，可能不能满足要求
  onMounted(() => {
    let editor = new EWangEditor('#editor')
    editor.config.uploadImgShowBase64 = true
    editor.config.customAlert = (err) => {
      console.log(err)
    }
    editor.customConfig = editor.customConfig ? editor.customConfig : editor.config
    editor.customConfig.onchange = (html) => {
      data.editorContent = html
      console.log(html)
    }
    editor.config.showFullScreen = false //取消展示全屏功能

    //以下为新增
    const menuItem = [
      //工具栏里有哪些工具
      'bold',
      'italic',
      'underline',
      'fontSize',
      'justify',
      'undo', //撤销
      'redo'
      //恢复
    ]

    editor.config.menus = [...menuItem] /* 应用设置好的工具栏 */
    editor.config.colors = [
      '#000000',
      '#eeece0',
      '#1c487f',
      '#4d80bf'
    ] /* 文字颜色、背景色可以选择哪些颜色? */
    editor.config.height = 300 //你可能发现这个编辑器是没法用样式调高度的?
    //新增至此
    editor.create()
  })

  const handleCreate = (val: any, key: string) => {
    createNewSelect[key].push({ value: val, label: val })
  }

  //定义一个变量来装载

  const submitJobs = () => {
    let formRuleValidates = [jobFormbasic.value.validate(), jobFromLocation.value.validate()]
    Promise.all(formRuleValidates).then((valid: any) => {
      //所以表单检验通过提交
      if (valid[0] && valid[1]) {
        console.log('success')
      } else {
        console.log('fail')
      }
    })
  }
</script>

<style scoped lang="less">
  @media (min-width: 1024px) {
    .post_job_content {
      padding: 39px 80px 80px;
    }
  }
  @media (max-width: 1023px) {
    .post_job_content {
      padding: 1rem;
    }
  }
</style>
