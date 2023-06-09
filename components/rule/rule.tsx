import React from 'react'
import styles from './Rule.module.css'
import { Menu } from '../menu/menu'

export function Rule() {
  return (
    <div className={styles.grid}>
      <a className={styles.card}>
        <Menu title="ルール" image="/nc139223.png" />
        <p>
          <ul>
            <li>シングル63</li>
            <li>同じポケモン&もちもの禁止</li>
            <li>TOD禁止（1時間5戦のみのため）</li>
            <li>9世代のポケモンをパーティに必ず2体は入れること（選出は自由）</li>
          </ul>
          <h3>禁止ポケモン・制限ポケモンに関しては、選出に関わらず必ず守ってください</h3>
        </p>
      </a>

      <a className={styles.card}>
        <Menu title="禁止ポケモン" image="/nc139228.png" />
        <p>
          <ul>
            <li>ミミッキュ</li>
            <li>メタモン（かわりもの）</li>
            <li>ゾロアーク（ヒスイ）</li>
            <li>伝説（ミライドン、コライドン）</li>
            <li>準伝説（イーユイ、パオジアン、ディンルー、チオンジェン）</li>
          </ul>
        </p>
      </a>

      <a className={styles.card}>
        <Menu title="制限ポケモン" image="/nc139230.png" />
        <p>
          <h4>パラドックス・600族はどちらか一体のみ使用可能</h4>
          <h4>以下のポケモンからは一体のみ使用可能</h4>
          <ul>
            <li>リザードン</li>
            <li>エースバーン</li>
            <li>ゲッコウガ</li>
            <li>ジュナイパー</li>
            <li>ダイケンキ</li>
            <li>バクフーン</li>
            <li>インテレオン</li>
          </ul>
        </p>
      </a>
    </div>
  )
}
