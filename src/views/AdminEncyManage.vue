<template>
  <div>
    <h1 class="manageTitle">知識百科 管理中心 -- 百科內容新增/修改</h1>

    <input class="addEncy" type="submit" value="新增百科內容" />

    <main class="EncyMainContent">

    <section class="EncytableSection">
        <div class="enct-header">
          <table class="EncymanageTab" cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>編號</th>
                <th>標題</th>
                <th>內容</th>
                <th>編輯</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="enct-content">
          <table class="EncymanageTab" cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>xxxxx</td>
                <td>我是標題</td>
                <td>我是內容</td>
                <td><a href="#"><img class="editImg" src="@/assets/icon/edit_btn.svg" alt /></a></td>
              </tr>
              <tr>
                <td>xxxxx</td>
                <td>我是標題</td>
                <td>我是內容</td>
                <td><a href="#"><img class="editImg" src="@/assets/icon/edit_btn.svg" alt /></a></td>
              </tr>
              <tr>
                <td>xxxxx</td>
                <td>我是標題</td>
                <td>我是內容</td>
                <td><a href="#"><img class="editImg" src="@/assets/icon/edit_btn.svg" alt /></a></td>
              </tr>
        
            </tbody>
          </table>
        </div>
      </section>

    </main>
  </div>
</template>

