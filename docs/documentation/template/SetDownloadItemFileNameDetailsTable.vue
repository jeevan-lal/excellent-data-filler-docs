<template>
  <table>
    <tbody>
      <tr>
        <th>
          Field Value
        </th>
        <td>
          <ul>
            <li>File Name: <strong>fileName</strong></li>
            <li>File Name with Folder: <strong>foldername\fileName</strong></li>
            <li>Variable with Folder: <strong>foldername\&#123;$predefine_variable$&#125;</strong></li>
            <li>⚠️ You do not have to give the full path of the folder <strong>(D:\Excel)</strong>, you can only give the
              name of any folder in the <strong>Download Folder</strong> of the PC.</li>
          </ul>
        </td>
      </tr>
      <tr style="background-color: var(--vp-c-bg) !important;">
        <th>
          Ways to save the file?
        </th>
        <td>
          <ul>
            <li><strong>Uniquify</strong> : If you want to save the file with a unique name</li>
            <li><strong>Overwrite</strong> : If you want to overwrite the file</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>