import * as React from 'react'
import { Menu } from './menu/menu'
import { makeStyles, createStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'
import { Box, Grid, MobileStepper, Paper, Typography, Button } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const steps = [
  {
    label: 'ルールをよく読む',
    description: `まずはルールと禁止・制限事項をしっかり確認してください。わからない点があれば主催者に確認してください。`,
  },
  {
    label: 'パーティを決める',
    description:
      '決められたルール内でベストなパーティを考えましょう！ガッツリ勝ちに行くのも良し、自分の好きなポケモンでパーティを組むのも良し、楽しみ方は人それぞれです(^^)',
  },
  {
    label: 'パーティを入力する',
    description: `入力欄に考えた6匹のポケモンを入力してください。テキストボックスをクリック（タップ）すると文字が入力してポケモンを検索することができます。禁止されているポケモンを選択するとエラーが出て進むことができないのでやり直してください。制限されているポケモンを選択すると色が変わりますが続行可能です。`,
  },
  {
    label: '「チェック」ボタンを押す',
    description: `6匹入力できたらルールに収まっているか確認し、「チェック」ボタンを押してください。問題なければ合言葉が表示されますのでそれを主催者に伝えて大会IDをもらってください。エラーが出た場合はルール上使えないポケモンがいますので、再度確認の上チェックをやり直してください`,
  },
]

const styles = makeStyles((theme) =>
  createStyles({
    root: {},

    stepper: {
      backgroundColor: '#ffe4b5',
    },
  })
)

export function Step() {
  const theme = useTheme()
  const classes = styles()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Grid item xs={12}>
        <Box pt={3} p={3}>
          <Menu title="使い方" image="/nc139233.png" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ maxWidth: 400, flexGrow: 1, alignItems: 'center' }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'center',
              height: 50,
              pl: 2,
              bgcolor: '#ffe4b5',
            }}
          >
            <Typography>
              <strong>{steps[activeStep].label}</strong>
            </Typography>
          </Paper>
          <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>{steps[activeStep].description}</Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.stepper}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                次へ
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                戻る
              </Button>
            }
          />
        </Box>
      </Grid>
    </Grid>
  )
}
