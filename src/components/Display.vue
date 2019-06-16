<template>
    <span>

        <div class="content">
            <span :id="s1" class="topSegments">
                _
            </span>
        </div>
        <table>
            <tr>
                <th :id="s2">|</th>
                <th :id="s3" class="horizontal">_</th>
                <th :id="s4">|</th>
            </tr>
            
            <tr>
                <th :id="s5">|</th>
                <th :id="s6" class="horizontal">_</th>
                <th :id="s7">|</th>
            </tr>
        </table>
    </span>

</template>

<script>

export default {
    name: 'display',
    props:{
        s1: String,
        s2: String,
        s3: String,
        s4: String,
        s5: String,
        s6: String,
        s7: String
  }
}
</script>

<style>
</style>
