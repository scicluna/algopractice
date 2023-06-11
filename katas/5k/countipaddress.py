# Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

# All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

# Examples
# * With input "10.0.0.0", "10.0.0.50"  => return   50 
# * With input "10.0.0.0", "10.0.1.0"   => return  256 
# * With input "20.0.0.10", "20.0.1.0"  => return  246

def ips_between(start, end):
    [sone, stwo, sthree, sfour] = start.split(".")
    [eone, etwo, ethree, efour] = end.split(".")

    onedif = int(eone) - int(sone)
    twodif = int(etwo) - int(stwo)
    threedif = int(ethree) - int(sthree)
    fourdif = int(efour) - int(sfour)

    total_dif = onedif*16777216 + twodif*65536 + threedif*256 + fourdif
    return total_dif

print(ips_between("10.0.0.0", "10.0.1.0"))